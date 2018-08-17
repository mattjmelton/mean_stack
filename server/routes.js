const api = require("./controllers.js");
const bp = require("body-parser");

module.exports = function(app){
    app.use(bp.json());

    //get all
    app.get("/api/pets", api.getAllPets);

    //post to create one
    app.post("/api/pets", api.createPet);

    //get one
    app.get("/api/pets/:id", api.getOnePet);

    //delete one
    app.delete("/api/pets/:id", api.deletePet);

    //update one using patch
    app.patch("/api/pets/:id", api.updatePet);

    //update likes
    app.patch("/api/pets/likes/:id", api.updatePetLikes)
}