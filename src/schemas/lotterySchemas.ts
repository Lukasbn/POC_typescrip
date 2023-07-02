import joi from "joi"

export const lotterySchema = joi.object({
    numbers : joi.array().unique().length(6).required().items(joi.number().integer().max(60).min(1).required())
})