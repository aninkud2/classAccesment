const express = require('express')
const foodModel = require('../model/model')
const {validator, createfoodSchema} =require('../midlewere/validation.js')

exports.newData =async (req,res) => {
   try{
    const data = await foodModel.create(req.body)
    res.status(201).json({
        data:data
    })
   }catch(e){
    res.status(400).json({
        message: e.message
    })
   }
}

exports.updateData =async (req,res) => {
    try{
     const id = req.params.id 
     const updateOne = await foodModel.findByIdAndUpdate(id).populate("refMax")
     res.status(201).json({
         data:updateOne
     })
    }catch(e){
     res.status(400).json({
         message: e.message
     })
    }
 }
 
 exports.deleteData =async (req,res) => {
    try{
     const id = req.params.id 
     const deleteOne = await foodModel.findByIdAndDelete(id)
     res.status(200).json({
         message:"Deleted Successfully"
     })
    }catch(e){
     res.status(401).json({
         message: e.message
     })
    }
 }
 
 exports.getOne =async (req,res) => {
    try{
     const id = req.params.id 
     const getaSingledata = await foodModel.findById(id).populate("refMax")
     res.status(200).json({
         data:getaSingledata
     })
    }catch(e){
     res.status(401).json({
         message: e.message
     })
    }
}

exports.getAll =async (req,res) => {
    try{
     const getAllData = await foodModel.find()
     res.status(200).json({
        message: "all data ",
         data:getAllData
     })
    }catch(e){
     res.status(401).json({
         message: e.message
     })
    }
}