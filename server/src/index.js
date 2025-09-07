import { config } from 'dotenv';
config();

import express from 'express';
import session from 'express-session';
import passport from 'passport';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';

import './passport.js';
import './strategies/google.js';
import './strategies/github.js';

async function bootstrap() {
    const app = express();
    const PORT = process.env.PORT;
    const MONGO_URI = process.env.MONGO_URI;

    // Connect to MongoDB
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('\n[INFO] Connected to MongoDB successfully\n');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit if DB connection fails
    }

    app.use(cors({
        origin: process.env.REACT_APP_URL,
        credentials: true,
    }));

    // Create app session
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false } // Set to 'true' for HTTPS
    }));

    // Initialize Passport
    app.use(passport.initialize());
    app.use(passport.session());

    // Auth Routes
    app.use('/api/auth', authRoutes);
    app.use('/api/users', userRoutes);

    app.listen(PORT, () => console.log(`[INFO] Dev server running on port ${PORT}`));
}

bootstrap();
