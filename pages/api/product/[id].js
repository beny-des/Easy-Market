import connectDB from "../../../middleware/mongodb";
import ProductModule from "../../../models/product"

const handler = async (req, res) => {
    console.log("req.method", req.method);
    const { id } = req.query;
    if (req.method === "PATCH") {
      const product = req.body;
  
      if (product) {
        try {
          const updatedProduct = await ProductModule.findByIdAndUpdate(id,product);
  
          res.status(200).send(updatedProduct);
        } catch (err) {
          res.status(403).send("product not found");
        }
      }
    }
 // by id
 else if (req.method === "GET") {
    const {id} = req.query;
    console.log("id:", id);
    try {
      const getById = await ProductModule.findById(id);

      res.status(200).send(getById);
    } catch (err) {
      res.status(403).send("product not found");
    }
  }
  // delete
  else if (req.method === "DELETE") {
    const {id} = req.query;
    console.log("id:", id);
    if (id) {
      try {
        await ProductModule.findByIdAndDelete(id);

        res.status(200).send("Done");
      } catch (err) {
        res.status(403).send("product not found");
      }
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }


};
export default connectDB(handler);