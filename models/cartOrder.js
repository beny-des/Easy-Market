import mongoose from "mongoose";
import User from "./user";
import Product from "./product";

const Schema = mongoose.Schema;

const cartOrder = new Schema({
  user: { type: Schema.Types.ObjectId, ref: User },
  cart: {
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: Product,
      },
    ],
    date:{

    },
    sum:{

    }

  },
});

const CartOrder = mongoose.model("CartOrder", cartOrder);
mongoose.models = {};

export default CartOrder;
