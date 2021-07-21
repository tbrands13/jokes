const Joke = require("../models/jokes.model");


module.exports.findAllJokes = (req,res)=>{
    Joke.find()
    .then(alljokes => {
        res.json({results: alljokes})
    })
    .catch(err => {
        res.json({message:"something went wrong getting all the jokes boss", error:err}
            )
    })
}


module.exports.createJoke = (req,res)=>{
    Joke.create(req.body)
        .then(newJoke=>{
            res.json({results: newJoke})
        })
        .catch(err => {
            res.json({message:"something went wrong making the joke boss", error:err}
                )
        })
}


module.exports.findAJoke = (req,res)=>{
    Joke.findOne({_id:req.params.jokeId})
        .then(foundJoke =>{
            res.json({results: foundJoke})
        })
        .catch(err => {
            res.json({message:"couldn't find the joke boss", error:err}
                )
        })
}

module.exports.updateJoke = (req,res)=>{
    Joke.findOneAndUpdate({_id:req.params.jokeId}, req.body,
        {new:true, runValidators:true}
        )
        .then(updatedJoke => res.json({results: updatedJoke}))
        .catch(err => {
            res.json({message:"couldn't update the joke boss", error:err}
                )
        })
}

module.exports.deleteJoke = (req,res)=>{
    Joke.deleteOne({_id:req.params.jokeId})
        .then(deletedJoke=> res.json({results: deletedJoke}))
        .catch(err => {
            res.json({message:"sorry, couldn't delete the joke boss", error:err}
                )
        })
}