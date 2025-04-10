import express from 'express'
const router = express.Router();
import Appliance from '../models/applianceModel.js'

router.get('/',async(req,res)=>{
    
})
router.get('/:id',async(req,res)=>{
    
})
router.post('/add',async (req,res)=>{
    const appliance = req.body;
    try{

        const newAppliance = res.body;
        if(!newAppliance){
            res.status(400).json({message : 'no data provided'});
        }
        if(!newAppliance.name || !newAppliance.powerRating){
            res.status(400).json({message : 'all required fields are needed'});
        }
        const newlyAddedAppliance = new Appliance(newAppliance);    
        await newlyAddedAppliance.save();
        res.status(201).json({
            message: "success",
            data : newAppliance
        });
    }catch(err){
        res.status(500).json({message : err.message})
    }
})
router.put('/signal',async (req,res)=>{

})


export default router;
