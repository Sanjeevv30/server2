const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

// Serve the Contact Us form
router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

// Handle form submission
router.post('/contactus', (req, res, next) => {
    // Handle the submitted data (e.g., save it to a database)
    const { name, email } = req.body;
    console.log(`Received data: Name - ${name}, Email - ${email}`);

    // Redirect to a success page or another page
    res.redirect('/success');
});

module.exports = router;
