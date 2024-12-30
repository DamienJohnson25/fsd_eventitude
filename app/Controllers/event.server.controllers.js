// Defines a function to handle the creation of an event.
// Currently, this function always sends an HTTP 500 Internal Server Error response.
const createEvent = (req, res) => {
    const schema = Joi.object({
        name:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        start:Joi.string().required(),
        close_registration:Joi.string().required(),
        max_attendees:Joi.string().required(),

    });
    const {error} = schema.validate(req.body);
    if (error){return res.status(400).send({error_message: "There's an issue!!"})}
    else {return res.status(201).send({user_id: id})} ;


}


const getEvent = (req, res) => {
   
    const schema = Joi.object({
        name:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        start:Joi.string().required(),
        close_registration:Joi.string().required(),
        max_attendees:Joi.string().required(),

    });
    
    const {error} = schema.validate(req.body);
    if (error){return res.status(404).send({error_message: "There's an issue!!"})}
    else {return res.status(200).send({user_id: id})} 

}



const updateEvent = (req, res) => {
    const schema = Joi.object({
        name:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        start:Joi.string().required(),
        close_registration:Joi.string().required(),
        max_attendees:Joi.string().required(),

    });
   
    if (error){return res.status(400).send({error_message: "There's an issue!!"})}
    else {return res.status(200).send({user_id: id})} 

}


const registerAttendee = (req, res) => {
    const schema = Joi.object({
        name:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        start:Joi.string().required(),
        close_registration:Joi.string().required(),
        max_attendees:Joi.string().required(),

    });
   
    
    
    if (error){return res.status(401).send({error_message: "There's an issue!!"})}
        else {return res.status(200).send({user_id: id})} 

}



const deleteEvent = (req, res) => {
    const schema = Joi.object({
        name:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        start:Joi.string().required(),
        close_registration:Joi.string().required(),
        max_attendees:Joi.string().required(),

    });
   
 
   
    if (error){return res.status(401).send({error_message: "There's an issue!!"})}
        else {return res.status(200).send({user_id: id})} 

}



const search = (req, res) => {
    const schema = Joi.object({
        name:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        start:Joi.string().required(),
        close_registration:Joi.string().required(),
        max_attendees:Joi.string().required(),

    });
   
    if (error){return res.status(400).send({error_message: "There's an issue!!"})}
    else {return res.status(200).send({user_id: id})} 
}

// Exports the functions as part of an object so they can be used in other parts of the application.
module.exports = {
    createEvent: createEvent,        // Exports the createEvent function.
    getEvent: getEvent,              // Exports the getEvent function.
    updateEvent: updateEvent,        // Exports the updateEvent function.
    registerAttendee: registerAttendee, // Exports the registerAttendee function.
    deleteEvent: deleteEvent,        // Exports the deleteEvent function.
    search: search,                  // Exports the search function.
}
