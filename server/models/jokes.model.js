const mongoose = require("mongoose");


const JokesSchema = new mongoose.Schema({

    setup:{
        type: String,
        required: [true, "Set up is required"],
        maxLength: [1000, "Tell us a joke, not a story"],
        minLength: [3, "joke must be at least 3 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "A punchline  is needed for a joke, duhhh"],
    },
    jokeCreated: {
        type: Date
    }
}, {timestamps:true} )

const Joke = mongoose.model("Joke", JokesSchema );

module.exports = Joke;