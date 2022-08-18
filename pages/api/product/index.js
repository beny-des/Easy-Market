import connectDB from "../../../middleware/mongodb";
import ProductModule from "../../../models/product";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // Check if {keys} is provided

    const { title, category, description, image, price, console,media,sale,released } = req.body;
    if (title && description && price) {
      try {
        const product = new ProductModule({
          title,
          category,
          description,
          image,
          price,
          console,
          media,
          sale,
          released
        });

        const productCreated = await product.save();

        return res.status(200).send(productCreated);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else if (req.method === "GET") {
    const products = await ProductModule.find().populate([
      "category",
      "console",
    ]);
    res.status(200).send(products);
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
