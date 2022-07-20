import connectDB from "../../../middleware/mongodb";
import CategoryModule from "../../../models/category"


const handler = async (req, res) => {
    if (req.method === 'POST') {
        
        const {category} = req.body;
        if (category) {
            try {
               
                const _category = new CategoryModule({
                  category
                });

               
                const categoryCreated = await _category.save();
                return res.status(200).send(categoryCreated);
            } catch (error) {
                return res.status(500).send(error.message);
            }
        } else {
            res.status(422).send('data_incomplete');
        }
    }
    else if (req.method === "GET") {
        const category = await CategoryModule.find();
        res.status(200).send(category);
      }
    else {
        res.status(422).send('req_method_not_supported');
    }
};

export default connectDB(handler);



