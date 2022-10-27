import mongoose from 'mongoose';

const opportunityDetailSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
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

const OpportunityDetail = mongoose.models.OpportunityDetail || mongoose.model('OpportunityDetail', opportunityDetailSchema);
export default OpportunityDetail;