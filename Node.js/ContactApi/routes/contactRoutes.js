const express = require('express');
const validateToken = require('../middleware/validateTokenHandler');
const router = express.Router();
const contactController = require('../controllers/contactController')

//adding middleware to check if user is logged in
router.use(validateToken);

router.route('/')
    .get(contactController.getContacts)
    .post(contactController.createContact);

router.route('/:id')
    .get(contactController.getContact)
    .put(contactController.updateContact)
    .delete(contactController.deleteContact);

module.exports = router;