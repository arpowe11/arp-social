import { config } from 'dotenv';
config();

import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { createUser } from '../utils/passport-helper.js';
import User from '../models/user-model.js';

// GitHub strategy for GitHub OAuth
passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: process.env.GITHUB_REDIRECT_URL,
            scope: ['user:email'],
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ oauthId: profile.id, provider: "github" });

                if (!user) {
                    user = await createUser(profile, "github");
                }

                return done(null, user);
            } catch (err) {
                return done(err, null);
            }
        }
    )
);