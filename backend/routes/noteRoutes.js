import express, { Router } from 'express'

const noteRouter = express.Router()

noteRouter.get('/', (req,res) => {
    res.send('hello from noteRoutes')
})

export default noteRouter