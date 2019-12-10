const router = require("express").Router();
let User = require("../models/user.model");

// "url/users"
router.route("/").get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

// "url/users/add"
router.route("/add").post((req, res) => {
    const email = req.body.email;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;
    //Creating new instance of a new user
    const newUser = new User({
        email,
        firstname,
        lastname,
        password
    });
    //Saving the new user into database
    newUser.save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
})
module.exports = router; 

