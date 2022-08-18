
import mongoose from "mongoose";
import Category from "./category";
import Console from "./console"
const Schema = mongoose.Schema;



  const product = new Schema({
    title: {
        type: String,
    },
    category: {
        type: [{type:Schema.Types.ObjectId,ref: Category}],
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        
    },
    price: {
        type: Number,
        
    },
    console: {
        type:  [{type:Schema.Types.ObjectId,ref: Console}],
        
    },
    media: {
        type: String,
        
    },
    sale: {
        type: Boolean,
        
    },
    released: {
        type: Boolean,
        
    },
});

mongoose.models = {};

const Product = mongoose.model('Product', product);

export default Product;