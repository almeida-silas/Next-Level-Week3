import express from 'express'
import 'express-async-errors'

import cors from 'cors'
import path from 'path'

import './Database/connection'

import routes from './routes'
import errorHandler from './Errors/handle'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(process.env.PORT)
