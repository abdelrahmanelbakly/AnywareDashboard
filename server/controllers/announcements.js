
import announcements from "../models/announcementsModel.js"


export const getAnnouncements = async (req, res)=>{
    try {
        const announcementsdata = await announcements.find();
        res.status(200).json(announcementsdata);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAnnouncement = async(req, res)=>{
    const announcement = req.body;
    const newAnnouncement = new announcements(announcement);
    try {
        await newAnnouncement.save();
        res.status(201).json(newAnnouncement);
    } catch (error) {
        
    }
}

export const updateAnnouncement = async (req, res)=>{
    const {id: _id} = req.params;
    const newAnnouncement = req.body 

    try{
        const existingAnnouncement = await announcements.findById(_id);
        if (!existingAnnouncement) {
            return res.status(404).send("No announcement with this id");
        }

        const updatedAnnouncement = await announcements.findByIdAndUpdate(_id, newAnnouncement, {new:true})
        res.json(updatedAnnouncement)
    }catch(error){
        res.status(409).json({ message: error.message})
    }
}

export const deleteAnnouncement = async (req, res)=>{
    const {id: _id} = req.params;

    try{
        const existingAnnouncement = await announcements.findById(_id);
        if (!existingAnnouncement) {
            return res.status(404).send("No announcement with this id");
        }

        await announcements.findOneAndDelete(_id)
        res.json({message:"Announcement deleted successfully"});
    }catch(error){
        res.status(409).json({ message: error.message})
    }
}