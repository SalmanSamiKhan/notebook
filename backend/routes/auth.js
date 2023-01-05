import express, { Router } from 'express'
import {body, validationResult } from 'express-validator'
import User from '../models/userModel.js'

const authRouter = express.Router()

const conditions = [
    body('name','Enter a valid name').isLength({min:3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({min:5})
]

authRouter.post('/', conditions, (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const user = User(req.body)
    user.save().then(user=>res.json(user))
    .catch(err=> res.json({error:'Errorss', message:err.message}))
})

export default authRouter