import express, { Router } from 'express'

const homeRouter = express.Router()

homeRouter.get('/', (req,res) => {
    res.send('This is homeRoutes')
})

export default homeRouter