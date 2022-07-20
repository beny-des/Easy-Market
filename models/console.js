import mongoose from "mongoose";

const Schema = mongoose.Schema;

const _console = new Schema({
  console: String,
});

const Console = mongoose.model("Console", _console);

mongoose.models = {};

export default Console;
