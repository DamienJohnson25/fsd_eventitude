// Defines a function to handle the creation of a question. 
// Currently, it always sends a 500 Internal Server Error response.

const Joi = require('joi');




const createQuestion = (req, res) => {

   
       
    if (error){return res.status(400).send({error_message: "There's an issue!!"})}
        else {return res.status(201).send({user_id: id})} 
 

}

const deletequestion = (req, res) => {
   
   
    if (error){return res.status(401).send({error_message: "There's an issue!!"})}
    else {return res.status(200).send({user_id: id})} 

}



const postQuestion = (req, res) => {
   
   
    if (error){return res.status(401).send({error_message: "There's an issue!!"})}
    else {return res.status(200).send({user_id: id})} 

}



const downvoteQuestion = (req, res) => {
   
  
    if (error){return res.status(401).send({error_message: "There's an issue!!"})}
    else {return res.status(200).send({user_id: id})} 

}

