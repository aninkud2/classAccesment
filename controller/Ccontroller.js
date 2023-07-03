const express = require('express')

const blog = require('../model/model');
const foodModel = require('../model/Cmodel')
const validator = require("../midlewere/Cvalidation")

const newComment = async (req, res) => {
    try{
    //    const mealId = req.params.id;
        const food = await blog.findById(req.params.id);
        // console.log(food)
        const meal = await new foodModel(req.body)
        // meal.posted = food;
        // meal.save();
        // food.refMax.push(meal);
        // await food.save();
        meal.link =food

        meal.save()

        if(req.body.refMax){
            food.refMax.push(meal)
        }else if (req.body.citizenMeal){
            food.citizenMeal.push(meal)
        }else if(req.body.chickwizz){
            food.chickwizz.push(meal)
        }
        food.save()

        res.status(200).json({
            status: "Success",
            data: meal
        })

    }catch(e){
        res.status(400).json({
            status: "Failled",
            message: e.message
        })
    }
}

const update = async(req,res) =>{
 try{
    const menu = await foodModel.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })

 console.log(req.params.id)
    if(!menu){
        res.status(400).json({
            message:"try again"
        })
    }else{
        res.status(200).json({
            message:'updated successfuly',
            data:menu,
           
        })
    }
    console.log(req.params.id)
 }catch(error){
    res.status(500).json({
        message:error.message
    })
 }
}



const allComment = async (req, res) => {
    try{
        const comments = await foodModel.find()
        res.status(200).json({
            status: "Success",
            data: comments
        })
    }catch(e){
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
        
    }
}

const deletefood = async (req, res) =>{
    try{
        const comId = req.params.comId;
        const blogId = req.params.blogId;
        await foodModel.findByIdAndDelete(comId);
        blog = await foodModel.findById(blogId);
        await blog.comments.pull('comId');
 
        res.status(200).json({
            status: "Success",
            message: "Deleted succesfully"
        })
    }catch(error){
        res.status(404).json({
            status: "Failed",
            message: error.message
        })
    }
}

module.exports = {
    newComment,
    allComment,
   deletefood,
   update
}