import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import authRoute from './routes/auth.route.js'

dotenv.config()

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
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}))

// Middleware to handle JSON object in req body
app.use(express.json())

app.use(cookieParser()) // Middleware to parse cookies

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.use('/api/auth', authRoute)








app.use((err, req, res, next) => {

    const statusCode = err.statusCode || 500;

    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({ success: false, 
        statusCode, 
        message });
});