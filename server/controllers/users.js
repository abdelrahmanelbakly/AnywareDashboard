import users from "../models/usersModel.js"


export const getusers = async (req, res)=>{

    try {
        const usersdata = await users.find();
        res.status(200).json(usersdata);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async(req, res)=>{
    const User = req.body;
    const newUser = new users(User);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const updateUser = async (req, res)=>{
    const {id: _id} = req.params;
    const newUser = req.body 

    try{
        const existingUser = await users.findById(_id);
        if (!existingUser) {
            return res.status(404).send("No User with this id");
        }

        const updatedUser = await users.findByIdAndUpdate(_id, newUser, {new:true})
        res.json(updatedUser)
    }catch(error){
        res.status(409).json({ message: error.message})
    }
}

export const deleteUser = async (req, res)=>{
    const {id: _id} = req.params;

    try{
        const existingUser = await users.findById(_id);
        if (!existingUser) {
            return res.status(404).send("No User with this id");
        }

        await users.findOneAndDelete(_id)
        res.json({message:"User deleted successfully"});
    }catch(error){
        res.status(409).json({ message: error.message})
    }
}