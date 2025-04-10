import mongoose from "mongoose";

const readingSchema = new mongoose.Schema({
    applianceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appliance',
        required: true
      },
      timestamp: {
        type: Date,
        default: Date.now
      },
      powerUsage: {
        type: Number,
        required: true
      },
      temperature: {
        type: Number,
        required: true 
      }
})
const Reading = mongoose.model('Reading',readingSchema);
export default Reading;
