const mongoose=require("mongoose");
const pet=require("./pet")
const owner=require("./owner");
const veterinarians=require("./veterinarians");
const { findById } = require("./pet");


try{
    mongoose.connect("mongodb://localhost:27017/petsproject");
    console.log("connected");
}catch(e){
    console.log(e);
}

async function createPet(){
    const newPet=new pet({
        firstName:"cat",
        favoriteFood:"milk",
        age:4
    });
    await newPet.save();
    console.log(newPet);
}

//createPet();

async function createOwner(){
    const newOwner=new owner({
        firstName:"johe",
        lastName:"doeh",
        email:"asx@gmail.com",
        age:45,
        veterinarianId:"6297d193038461e0298108da",
        petsId:["6298d27e2038e1ef621a0707","6297cdf84eab6b13562f4187"]
    });
    await newOwner.save();
    console.log(newOwner);
}

//createOwner();

async function createVeterinarians(){
    const newVeterinarians=new veterinarians({
      firstName:"david",
      lastName:"levi",
      phone:"0542845122"
    });
    await newVeterinarians.save();
    console.log(newVeterinarians);
}

//createVeterinarians();

async function findPetsAndVeterinarians(ownerName){
  const ownerFind=await owner.where('firstName').equals(ownerName);
  ownerFind.forEach(async (elem)=>{
     //find details of vaterinar of this owner
      let res1=elem.veterinarianId;
      let resVaterinar=await veterinarians.findById(res1).select('firstName').select('lastName').select('phone');
      console.log(resVaterinar);
    //find list of pets of this owner
      let res2=elem.petsId;
      res2.forEach(async(element)=>{
          let resPet=await pet.findById(element).select('firstName');
          console.log(resPet);
      })
  })
}

findPetsAndVeterinarians('johe');

