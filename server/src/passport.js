import passport from 'passport';
import { serializeUser, deserializeUser } from './utils/passport-helper.js';

// Set up Passport serialization
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);
