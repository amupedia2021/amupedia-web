import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Form = mongoose.models.Form || mongoose.model("Form", formSchema);
export default Form;
