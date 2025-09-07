import { config } from 'dotenv';
config();

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { createUser } from '../utils/passport-helper.js';
import User from '../models/user-model.js';

// Google strategy for google oauth
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_REDIRECT_URL,
            scope: ['email', 'profile'],
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ oauthId: profile.id, provider: "google" });

                if (!user) {
                    user = await createUser(profile, "google");
                }

                return done(null, user);
            } catch (err) {
                return done(err, null);
            }
        }
    )
);
