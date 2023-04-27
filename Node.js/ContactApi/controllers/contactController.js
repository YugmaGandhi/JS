const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
//@desc Get all contact
//@route GET /api/contact
//@access private

exports.getContacts = asyncHandler(async (req, res) => {
    const data = await Contact.find({ user_id: req.user.id });
    res.status(200).json(data);
})

//@desc Create new contact
//@route POST /api/contact
//@access private

exports.createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory !")
    }

    const contact = await Contact.create({
        name: name,
        email: email,
        phone: phone,
        user_id: req.user.id //it will assign user id to contact so only right user can fetch their contacts
    });

    res.status(201).json(contact);
})

//@desc Get contact
//@route GET /api/contact/:id
//@access private

exports.getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found !");
    }
    res.status(200).json(contact);
})

//@desc update contact
//@route PUT /api/contact/:id
//@access private

exports.updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404)
        throw new Error("Contact not found !");
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(401)
        throw new Error("You are not authorized !")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedContact);
})

//@desc Delete contact
//@route DELETE /api/contact/:id
//@access private

exports.deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found !");
    }
    
    if(contact.user_id.toString() !== req.user.id){
        res.status(401)
        throw new Error("You are not authorized !")
    }
    
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Contact deleted successfully !" });
})
