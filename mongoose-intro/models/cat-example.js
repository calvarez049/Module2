const mongoose = require ("mongoose");

// import/require the model
const Cat = require("./Cat.js");
// const Cat = require("./models/Cat."); => you don't have to use ".js"

// CONNECT YOUR EXPRESS APP TO THE MONGO DB
mongoose
                                //catApp is the name of our database
  .connect('mongodb://localhost/catApp', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

//   Create new cats (insert document in the DB(uses insertOne() and insertMany()))
//   -----------------------------------------------------------------------------

// .create() is a mongoose method and under the hood uses insertOne and insertMany
Cat
    // .create({name: "Garfield", age: 17, color:"orange"})
    // .then(catDoc => console.log("Cat create worked well: ", catDoc))
    // .catch(error => console.log("Creating a new cat went wrong! Try again", error));

    //ModelName.create().then().catch()

    // const sandrasCat = new Cat({name:"Milo", age:4});
    // sandrasCat
    // .save() //it does not create automatically
    // .then(newCat => console.log("A created cat is: ", newCat))
    // .catch(err => console.log("Error creating cat!", err));

    //Reading the cats from DB (use find(), findOne(), findById())
    //===============================================

    // .find() - always getting an array back as a response
Cat
  .find({age: {$lt:10}})
  .then(catDoc => console.log("Found this dog: ", catDoc))
  .catch(err => console.log("error creating cats, err"));

    // .findById() - always getting an object back as a response    
Cat
  // .findById("k41341k4j34")
  // .then(foundCat => console.log("Found this dog: ", foundCat))
  // .catch(err => console.log("error creating cats, err"));

Cat 
  .findByIdAndUpdate("5d48d44bf98aa07d4062e099", {$set: {name:"Sandra", age: 17}})
  .then(updatedCat => console.log("Updated cat: ", updatedCat))
  .catch(err => console.log("error creating cats, err"));

