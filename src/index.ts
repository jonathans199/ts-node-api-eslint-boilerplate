import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())

app.listen('4040', () => console.log('app running '))

app.get('/', (req, res) => res.json('API on testing here '))
