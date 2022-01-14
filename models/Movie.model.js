// Iteration 1 -------------------

const {model,Schema}= require("mongoose")

const movieSchema = new Schema({
    title:String,
    director:String,
    stars:[String],
    description:String,
    showtimes:[String],
    image:String
})

const movieModel = model("movies",movieSchema)

module.exports = movieModel