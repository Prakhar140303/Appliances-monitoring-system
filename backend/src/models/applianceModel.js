import mongoose from "mongoose";

const applianceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: String, enum: ['on', 'off'], default: 'off' },
    powerRating: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    lastHeartbeat: {
        type: Date,
        default: null,
      }
},{timeStamp : true})
const Appliance = mongoose.model('Appliance',applianceSchema);
export default Appliance;
