import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import path from "path"

import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'
import taskRoutes from './routes/task.route.js'
import reportsRoutes from './routes/report.route.js'
import { fileURLToPath } from 'url'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Database connected successfully')
}).catch((error) => {
    console.error('Database connection error:', error)
})

const app = express()

// Middleware to handle CORS
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Allow requests from the frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true,
}))

// Middleware to handle JSON object in req body
app.use(express.json())

app.use(cookieParser()) // Middleware to parse cookies

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/tasks', taskRoutes)
app.use('/api/reports', reportsRoutes)

// serve static files from "uploads" folder

app.use("/uploads", express.static(path.join(__dirname, "uploads")))






app.use((err, req, res, next) => {

    const statusCode = err.statusCode || 500;

    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({ success: false, 
        statusCode, 
        message });
});