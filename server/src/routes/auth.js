import { config } from 'dotenv';
config();

import { Router } from 'express';
import passport from 'passport';

const DASHBOARD = process.env.REACT_APP_URL + '/dashboard';
const router = Router();

// Google auths
router.get('/google', passport.authenticate('google'), (req, res) => 
    res.send(200));
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: process.env.REACT_APP_URL }), 
(req, res) => 
    res.redirect(DASHBOARD));

// Github auths
router.get('/github', passport.authenticate('github', { failureRedirect: process.env.REACT_APP_URL }), 
(req, res) =>
    res.sendStatus(200));
router.get('/github/redirect', passport.authenticate('github'), (req, res) =>
    res.redirect(DASHBOARD));


export default router;
