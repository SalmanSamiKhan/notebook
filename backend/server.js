import express from 'express'
import connectToMongo from './db.js'
import noteRouter from './routes/noteRoutes.js'

const app = express()
connectToMongo() // importing connectToMongo function from db.js
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/notes', noteRouter )

const localPort = 3001
app.listen(localPort || process.env.PORT, ()=>{
    console.log(`server running on http://localhost:${localPort}`)
})