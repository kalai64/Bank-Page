import mongoose from "mongoose";
import usermodel from "../models/Bank.js";

const Create = async(req,res)=>{
    try {
        const users = await usermodel.create(req.body)
        res.status(200).send({
            success:true,
            message:'Created Successfully',
            users,
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'Failed to create data'
        })
    }
}

const getUsers = async(req,res)=>{
    try {
        const users = await usermodel.find()
        res.status(200).send({
            success:true,
            message: 'Fetched data Successfully',
            users,
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'Failed to fetch the datas', 
        })
    }
}

const Delete = async (req, res) => {
    try {
        const id = req.params.id;
        await usermodel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: 'Deleted Successfully'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Failed to delete data',
        });
    }
};


export default {
    Create,
    getUsers,
    Delete
}

