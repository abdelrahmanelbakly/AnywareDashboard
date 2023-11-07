import quizzes from "../models/quizzesModel.js"


export const getquizzes = async (req, res)=>{

    try {
        const quizzesdata = await quizzes.find();
        res.status(200).json(quizzesdata);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createQuizz = async(req, res)=>{
    const Quizz = req.body;
    const newQuizz = new quizzes(Quizz);
    try {
        await newQuizz.save();
        res.status(201).json(newQuizz);
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const updateQuizz = async (req, res)=>{
    const {id: _id} = req.params;
    const newQuizz = req.body 

    try{
        const existingQuizz = await quizzes.findById(_id);
        if (!existingQuizz) {
            return res.status(404).send("No quizz with this id");
        }

        const updatedQuizz = await quizzes.findByIdAndUpdate(_id, newQuizz, {new:true})
        res.json(updatedQuizz)
    }catch(error){
        res.status(409).json({ message: error.message})
    }
}

export const deleteQuizz = async (req, res)=>{
    const {id: _id} = req.params;

    try{
        const existingQuizz = await quizzes.findById(_id);
        if (!existingQuizz) {
            return res.status(404).send("No quizz with this id");
        }

        await quizzes.findOneAndDelete(_id)
        res.json({message:"Quizz deleted successfully"});
    }catch(error){
        res.status(409).json({ message: error.message})
    }
}