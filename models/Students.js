const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
  roll:  {
    type : String,
    unique : true
  },
  name: String,
  wsst:   String,
  os: String,
  daa: String,
  mis: String,
  spii: String,
  status : String
});
module.exports = mongoose.model("Student", studentSchema)