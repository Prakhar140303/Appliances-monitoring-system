
import Appliance from '../models/applianceModel.js'
const addAppliance = async (req,res)=>{
    try{
        const newAppliance = req.body;
        console.log(newAppliance);
        if(!newAppliance){
            return res.status(400).json({message : 'no data provided'});
        }
        if(!newAppliance.name || !newAppliance.powerRating){
            return res.status(400).json({message : 'all required fields are needed'});
        }
        const newlyAddedAppliance = new Appliance(newAppliance);    
        await newlyAddedAppliance.save();
        return res.status(201).json({
            message: "success",
            data : newAppliance
        });
    }catch(err){
        return res.status(500).json({message : err.message})
    }
};
const getAllAppliances = async (req,res)=>{
    try{
        const AllAppliances = await Appliance.find({});
        if(!AllAppliances.length){
            return res.status(404).json({message : 'no appliances found'});
        }
        res.status(200).json({
            message : "success",
            data : AllAppliances
        });
    }catch(err){
        res.status(500).json({message : err.message})
        console.log("Error in  appliance controller");
    }
}

const getAllAppliancesById = async(req,res)=>{
    try{
        const id = res.params.id;
        if(!id){
            return res.status(400).json({message : 'no id provided'});
        }
        const appliance = await Appliance.findById(id);
        if(!appliance){
            return res.status(404).json({message : 'no appliance found'});
        }
        res.status(200).json({
            message : "success",
            data : appliance
        });
    }catch(Error){
        res.status(500).json({message : Error.message});
        console.log("Error in  appliance controller");
    }

    
}
export {addAppliance,getAllAppliances,getAllAppliancesById};