import connectDB from "../../../middleware/mongodb";
import ConsoleModule from "../../../models/console";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { consoles } = req.body;
    if (consoles) {
      try {
        const console = new ConsoleModule({
          consoles,
        });

        const consoleCreated = await console.save();
        return res.status(200).send(consoleCreated);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else if (req.method === "GET") {
    const _consoles = await ConsoleModule.find();
    res.status(200).send(_consoles);
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
