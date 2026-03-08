const pizzaDetailsModel = require('../models/pizzaDetails.model');

const savePizzadetails = async (req, res) => {
    try {
        console.log(req.body);
        
        const savepizzaDetails = await pizzaDetailsModel.insertOne(req.body);
        
        res.status(200).json({
            success: true,
            data: savepizzaDetails
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

const updatePizzadetails = async (req, res) => {
    try {
        const updateData = req.body;

        const result = await pizzaDetailsModel.updateOne(
            { _id: req.body._id },
            { $set: updateData }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Pizza not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Pizza updated successfully",
            data: result
        });

    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
};

const deletePizzadetails = async (req,res) =>{
    try {

        const result = await pizzaDetailsModel.deleteOne(
            { _id: req.body._id }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Pizza not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Pizza details deleted successfully",
            data: result
        });

    } catch (error) {
        console.error("delete Error:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
}

const getAllPizzadetails = async (req,res) =>{
    try {

        const result = await pizzaDetailsModel.find();

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        console.error("getAllPizzadetails Error:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
}

const getPizzadetailsbyId = async (req,res) =>{
    try {

        const result = await pizzaDetailsModel.findOne(
            { _id: req.body._id }
        );

        console.log(result);
        

        if (result == null) {
            return res.status(404).json({
                success: false,
                message: "Pizza not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Pizza details got successfully",
            data: result
        });

    } catch (error) {
        console.error("Pizza details Error:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
}


module.exports = {
    savePizzadetails,
    updatePizzadetails,
    deletePizzadetails,
    getAllPizzadetails,
    getPizzadetailsbyId
};