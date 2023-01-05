import express from 'express'
import connectToMongo from './database.js'
import noteRouter from './routes/noteRoutes.js'
import homeRouter from './routes/homeRoutes.js'
import createRouter from './routes/createRoutes.js'
import updateRouter from './routes/update.js'
import deleteRouter from './routes/delete.js'
import authRouter from './routes/auth.js'

const app = express()
connectToMongo() // importing connectToMongo function from db.js
app.use(express.json()) // for using json
app.use(express.urlencoded({extended:true}))

app.use('/api/', homeRouter )
app.use('/api/auth', authRouter )
app.use('/api/create', createRouter )
app.use('/api/notes', noteRouter )
app.use('/api/update', updateRouter )
app.use('/api/delete', deleteRouter )

const localPort = 3000
app.listen(localPort || process.env.PORT, ()=>{
    console.log(`server running on http://localhost:${localPort}`)
})