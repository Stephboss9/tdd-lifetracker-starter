const express = require("express")
const Nutrition = require("../models/nutrition")
const { BadRequestError } = require("../utils/errors")
const security = require("../middleware/security")
const permissions = require("../middleware/permissions.jsx")
const nutritionRouter = express.Router()




nutritionRouter.get("/", async (req, res, next) => {
    try {
        userId = req.headers['user_id']
       const nutritions = await Nutrition.listNutritionForUser(userId)
       return res.status(201).json({"nutritions":nutritions})
    }catch (err){
        next(err)
    }
})


nutritionRouter.post("/", async (req, res, next) => {
    try {
        const nutrition  = await Nutrition.createNutrition(req.body)
        return res.status(201).json({"nutrition":nutrition})
    }catch (err){
        next(err)
    }
})

nutritionRouter.get("/:nutritionId", async (req, res, next) => {
    try {
        const nutrition = await Nutrition.fetchNutritionById(req.params)
        return res.status(200).json({"nutrition":nutrition})
    }catch (err){
        next(err)
    }
})

module.exports = nutritionRouter

