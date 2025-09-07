import User from '../models/user-model.js';
import validator from 'validator';

// Creates user for the different strategies
export async function createUser(profile, provider) {
    let email, name, avatar;

    if (provider === "google") {
        email = profile.emails?.[0]?.value;
        name = profile.displayName;
        avatar = profile.photos?.[0]?.value;
    } else if (provider === "github") {
        // GitHub profile may have emails array or email property
        email = profile.emails?.[0]?.value || profile.email;
        name = profile.displayName || profile.username || '';
        avatar = profile.photos?.[0]?.value || null;
    }

    const safeEmail = validator.isEmail(email) ? validator.normalizeEmail(email) : undefined;
    const safeName = validator.escape(name || '');
    const safeAvatar = avatar ? validator.trim(avatar) : undefined;

    return await User.create({
        oauthId: profile.id,
        name: safeName,
        email: safeEmail,
        avatar: safeAvatar,
        provider
    });
}

// Serialize helper functions to keep user session
export function serializeUser(user, done) {
    done(null, user.id);
}

export async function deserializeUser(id, done) {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
}
