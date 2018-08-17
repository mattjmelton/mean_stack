const Pet = require("./model"); //change the variable model to the exam's main schema

//get all query
function getAllPets(req, res){
    console.log(" in the get all pets controller ")
    Pet.find({})
        .then(data => console.log(" getting all pets ")||res.json(data))
        .catch(errs => res.json(errs));
}
//create one query
function createPet(req, res){
    console.log(" in the create a pet controller ")
    Pet.create(req.body)
    .then(data => console.log(" creating pet ")||res.json(data))
    .catch(errs => console.log("errors in creating pet", errs)||res.json(errs));
}
//get one query use req.params.id
function getOnePet(req, res){
    console.log(" in the get One pet controller ", req.params.id)
    Pet.findById(req.params.id)
        .then(data => console.log(" getting One pet ")||res.json(data))
        .catch(errs => console.log(" errors in getting one pet", errs)||res.json(errs));
}
//delete query use req.params.id
function deletePet(req, res){
    console.log(" in the delete Pet controller ",req.params.id)
    Pet.findByIdAndRemove(req.params.id)
        .then(data => console.log(" deleting Pet ")||res.json(data))
        .catch(errs => console.log(" there are errors ",errs)||res.json(errs));
}
//update one query  find by id and then save. use params.id and req.body
function updatePet(req, res){
    console.log(" in the update Pet controller ")
    Pet.findById(req.params.id)
        .then(petData=>{
            petData.name=req.body.name;
            petData.animal=req.body.animal;
            petData.desc=req.body.desc;
            petData.likes=req.body.likes;
            petData.skill1=req.body.skill1;
            petData.skill2=req.body.skill2;
            petData.skill3=req.body.skill3;
            return petData.save();
        })
        .then(data => console.log(" updating Pet ")||res.json(data))
        .catch(errs => console.log(" errors in updating Pet ",errs)||res.json(errs));
}
function updatePetLikes(req, res){
    console.log(" in the update Pet Likes controller ")
    Pet.findById(req.params.id)
        .then(petData=>{
            petData.likes=req.body.likes;
            petData.likes+=1;
            return petData.save();
        })
        .then(data => console.log(" updating Pet ")||res.json(data))
        .catch(errs => console.log(" errors in updating Pet ",errs)||res.json(errs));
}

module.exports = {getAllPets, createPet, getOnePet, deletePet, updatePet, updatePetLikes} //put controller functions here.