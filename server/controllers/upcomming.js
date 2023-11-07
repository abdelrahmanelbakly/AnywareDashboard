import upcomming from "../models/upcommingModel.js"
import mongoose from "mongoose";


export const getupcomming = async (req, res)=>{
    try {
        const upcommingdata = await upcomming.find();
        res.status(200).json(upcommingdata);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUpcomming = async(req, res)=>{
    const Upcomming = req.body;
    const newUpcomming = new upcomming(Upcomming);
    try {
        await newUpcomming.save();
        res.status(201).json(newUpcomming);
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const updateUpcomming = async (req, res)=>{
    const {id: _id} = req.params;
    const newUpcomming = req.body 
    
    try{
        const existingUpcoming = await upcomming.findById(_id);
        if (!existingUpcoming) {
            return res.status(404).send("No upcoming with this id");
        }

        const updatedUpcomming = await upcomming.findByIdAndUpdate(_id, newUpcomming, {new:true})
        res.json(updatedUpcomming)
    }catch(error){
        res.status(409).json({ message: error.message})
    }
}

export const deleteUpcomming = async (req, res)=>{
    const {id: _id} = req.params;

    const existingUpcoming = await upcomming.findById(_id);
   

    try{
        if (!existingUpcoming) {
            return res.status(404).send("No upcoming with this id");
        }
        await upcomming.findOneAndDelete(_id)
        res.json({message:"Upcomming deleted successfully"});
    }catch(error){
        res.status(409).json({ message: error.message})
    }
}