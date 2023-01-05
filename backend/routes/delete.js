import express, { Router } from 'express'

const deleteRouter = express.Router()

deleteRouter.delete('/', (req,res) => {
    res.send('This is deleteRoutes')
})

export default deleteRouter