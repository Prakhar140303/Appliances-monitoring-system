import express from 'express'
const router = express.Router();

import { addAppliance, getAllAppliances ,getAllAppliancesById,updateStatus} from '../controllers/appliance.controller.js';

router.get('/',getAllAppliances);
router.get('/:id',getAllAppliancesById);
router.post('/add',addAppliance);
router.put('/signal',updateStatus);


export default router;
