import Reading from '../models/readingModel.js';

// 1. Add a new reading
const addReading = async (req, res) => {
    try {
        const { applianceId, powerUsage, temperature, timestamp } = req.body;

        if (!applianceId || powerUsage === undefined || temperature === undefined) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newReading = new Reading({ applianceId, powerUsage, temperature, timestamp });
        await newReading.save();

        res.status(201).json({
            message: "Reading added successfully",
            data: newReading
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// 2. Get all readings
const getAllReadings = async (req, res) => {
    try {
        const readings = await Reading.find().populate('applianceId');
        if (!readings.length) {
            return res.status(404).json({ message: 'No readings found' });
        }

        res.status(200).json({
            message: "Success",
            data: readings
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// 3. Get readings by appliance ID
const getReadingsByAppliance = async (req, res) => {
    try {
        const { id } = req.params;
        const readings = await Reading.find({ applianceId: id });

        if (!readings.length) {
            return res.status(404).json({ message: 'No readings found for this appliance' });
        }

        res.status(200).json({
            message: "Success",
            data: readings
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// 4. (Optional) Get readings within a date range
const getReadingsByDateRange = async (req, res) => {
    try {
        const { start, end } = req.query;
        const readings = await Reading.find({
            timestamp: {
                $gte: new Date(start),
                $lte: new Date(end)
            }
        });

        if (!readings.length) {
            return res.status(404).json({ message: 'No readings in given range' });
        }

        res.status(200).json({
            message: "Success",
            data: readings
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export { addReading, getAllReadings, getReadingsByAppliance, getReadingsByDateRange };
