const JokeController = require("../controllers/jokes.controllers");

module.exports = app =>{
    app.get("/api/jokes/:jokeId", JokeController.findAJoke)
    app.get("/api/jokes", JokeController.findAllJokes)
    app.post("/api/jokes/create", JokeController.createJoke)
    app.put("/api/jokes/:jokeId", JokeController.updateJoke)
    app.delete("/api/jokes/:jokeId", JokeController.deleteJoke)
}