import mongoose from 'mongoose';

const opportunitiesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  applyNow: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})

const Opportunities = mongoose.models.Opportunities || mongoose.model('Opportunities', opportunitiesSchema);
export default Opportunities;