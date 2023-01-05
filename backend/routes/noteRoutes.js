import express, { Router } from 'express'

const noteRouter = express.Router()

noteRouter.get('/', (req,res) => {
    res.send(req.body)
})

export default noteRouter