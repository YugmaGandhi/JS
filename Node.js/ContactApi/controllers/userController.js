const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User =  require('../models/userModel');

//@desc register user
//@route POST /api/users/register
//@access public

exports.registerUser = asyncHandler(async (req, res) => {
    const {username , email, password} = req.body;
    if(!username || !email || !password){
        res.status(400)
        throw new Error('please add all fields')
    }
    const userEmail = await User.findOne({email})
    if(userEmail){
        res.status(400)
        throw new Error('user already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password: hashedPassword   
    });

    if(user){
        res.status(201).json({
            _id:user.id,
            email:user.email,
        })
    }
    else{
        res.status(400)
        throw new Error('invalid user data')
    }
})

//@desc login user
//@route POST /api/users/login
//@access public

exports.loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400)
        throw new Error('please add all fields')
    }
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        const userToken = jwt.sign({
            user:{
                id:user.id,
                email:user.email,
                username:user.username
            }
        },process.env.SECRET_KEY,{expiresIn:'1h'})
        res.status(200).json({userToken :userToken})
    }else{
        res.status(400)
        throw new Error('invalid credentials')
    }
})

//@desc current user
//@route GET /api/users/current
//@access private

exports.currentUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})