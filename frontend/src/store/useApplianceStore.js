import {create} from 'zustand';
import {axiosInstance} from '../lib/axios'
import toast from 'react-hot-toast';

export const useApplianceStore = create((set,get) => ({
    allAppliaces: [],
    startDate: null,
    endDate: null,
    getAllAppliances: async () => {
        try{
            const res = await axiosInstance.get('/appliances');
            set({allAppliaces : res.data.data});
        }catch(err){
            toast.error(err.response.data.message);
            console.log('error in getting appliances');
        }
    },
    addAppliance  : async (appliance) => {
        try{
            const res = await axiosInstance.post('/appliances/add',appliance);
            if(res.data.status !== 'success'){
                toast.error(res.data.message);
            }
            set({allAppliaces : [...get().allAppliaces,res.data.data]});
        }catch(err){
            toast.error(err.response.data.message);
            console.log('error in adding appliances');
        }}
}))