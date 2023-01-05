import express, { Router } from 'express'

const updateRouter = express.Router()

updateRouter.patch('/', (req,res) => {
    res.send('This is updateRoutes')
})

export default updateRouter