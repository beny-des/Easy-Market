import connectDB from "../../../middleware/mongodb";
import CategoryModule from "../../../models/category"

const handler = async (req, res) => {

 if (req.method === "DELETE") {
        const {id} = req.query;
        
        if (id) {
          try {
            const deleteById = await CategoryModule.findByIdAndDelete(id);
    
            res.status(200).send("Done", deleteById);
          } catch (err) {
            res.status(403).send("category not found");
          }
        }
      }
      
      else if (req.method === "GET") {
        const {id} = req.query;
        console.log("id:", id);
        try {
          const getById = await CategoryModule.findById(id);
    
          res.status(200).send(getById);
        } catch (err) {
          res.status(403).send("product not found");
        }
      }
      else {
        res.status(422).send("req_method_not_supported");
      }

};
export default connectDB(handler);