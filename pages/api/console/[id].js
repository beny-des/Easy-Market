import connectDB from "../../../middleware/mongodb";
import ConsoleModule from "../../../models/console";

const handler = async (req, res) => {
  // console.log("req.method", req.method);
  const { id } = req.query;
  if (req.method === "PATCH") {
    const console = req.body;

    if (console) {
      try {
        const updatedConsole = await ConsoleModule.findByIdAndUpdate(id, console);

        res.status(200).send(updatedConsole);
      } catch (err) {
        res.status(403).send("console not found");
      }
    }
  }
  // by id
  else if (req.method === "GET") {
    const {id} = req.query;
    console.log("id:", id);
    try {
      const getById = await ConsoleModule.findById(id);

      res.status(200).send(getById);
    } catch (err) {
      res.status(403).send("console not found");
    }
  }
  // delete
  else if (req.method === "DELETE") {
    const {id} = req.query;
    console.log("id:", id);
    if (id) {
      try {
        const deleteById = await ConsoleModule.findByIdAndDelete(id);

        res.status(200).send("Done");
      } catch (err) {
        res.status(403).send("console not found");
      }
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};
export default connectDB(handler);
