import express from 'express';
import { 
    addReading, 
    getAllReadings, 
    getReadingsByAppliance,
    getReadingsByDateRange 
} from '../controllers/reading.controller.js';

const router = express.Router();

router.post('/add', addReading);
router.get('/', getAllReadings);
router.get('/appliance/:id', getReadingsByAppliance);
router.get('/range', getReadingsByDateRange);

export default router;
