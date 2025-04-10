import express from 'express'
const router = express.Router();

import { addAppliance, getAllAppliances ,getAllAppliancesById} from '../controllers/appliance.controller.js';

router.get('/',getAllAppliances);
router.get('/:id',getAllAppliancesById);
router.post('/add',addAppliance);
router.put('/signal',async (req,res)=>{

})


export default router;
