const express = require('express');
const Users = require('../models/Users');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require("../middleware/stayLogin");

const JWT_sec = "NaryVip";//For chking authenticity from the usr client side

//ROUTE: 1 - Creates a user using : POST method
router.post('/signup',[
    body('name', "Min length is 3").isLength({min:3}),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Minimum length is 5").isLength({min:5})
] ,async(req, res)=>{

    //return bad req for errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //Already existing? checks
      let user = await Users.findOne({email: req.body.email});
      if(user){
        return res.status(400).json({error: "Email already taken"});
      }

      //Salt - Extra work for secure pwd storage
      const salt = await bcrypt.genSalt(10);
      const secPwd = await bcrypt.hash(req.body.password, salt);

      user = await Users.create({
        username: req.body.username,
        password: secPwd,
        email:req.body.email,
        name: req.body.name,
      })
      const data = {
        user: {
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_sec);
      res.json({authToken});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something gone wrong");
    }

})

//ROUTE - 2: Authentication - checking /api/auth/signin
router.post('/signin',[
  body('email', "Enter a valid email").isEmail(),
  body('password', "Password required").exists()
] ,async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;

    try {
      let user = await Users.findOne({email});
      if(!user){
        return res.status(500).json({error: "Sorry, the user doesn't exists"});
      }

      const passCheck = await bcrypt.compare(password, user.password);
      if(!passCheck){
        return res.status(500).json({error: "Wrong Credentials"});
      }

      const data = {
        user: {
          id: user.id
        }
      }

      const authToken = jwt.sign(data, JWT_sec);
      res.json({authToken});

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Something gone wrong");
    }

})

//ROUTE - 3: Getting user's details who already logged in POST:/auth/api/getuser
router.post('/getuser',fetchUser, async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
      const userId = req.user.id;
      const user = await Users.findById(userId).select("-password")//Grab all his fields except his pwd 
      res.send(user);
    }
    catch(error){
      console.error(error.message);
      res.status(500).send("Something gone wrong");
    }
  })
module.exports = router; 