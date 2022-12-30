import mongoose from 'mongoose';

const opportunitesSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  applyNow: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Opportunities = mongoose.models.Opportunities
  || mongoose.model('Opportunities', opportunitesSchema);
export default Opportunities;
