import mongoose from "mongoose";

const Schema = mongoose.Schema;

const category = new Schema({
  category: String,
});

const Category = mongoose.model("Category", category);
mongoose.models = {};

export default Category;
