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
    address:{
      type:String,required:true

    },
    date:{
      type:Number

    },
    paymentId:{
      type:Number,required:true

    },
    sum:{
      type:Number

    }

  },
});

const CartOrder = mongoose.model("CartOrder", cartOrder);
mongoose.models = {};

export default CartOrder;
