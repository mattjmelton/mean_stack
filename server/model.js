const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
mongoose.connect('mongodb://localhost:27017/pet_shelter',{ useNewUrlParser: true});

//Schema here
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A pet name is required."],
        unique: true,
        minlength: [3, "Name requires at least 3 characters."]
    },
    animal: {
        type: String,
        required: [true, "What type of animal is it?"],
        minlength: [3, "Type requires at least 3 characters."]
    },
    desc: {
        type: String,
        minlength: [3, "Description requires at least 3 characters."]
    },
    likes: {
        type: Number 
    },
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String},
}, {timestamps: true});

PetSchema.plugin(uniqueValidator,{message:"The pet name must be unique."});
const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
