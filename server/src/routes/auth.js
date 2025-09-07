import { Router } from 'express';
import passport from 'passport';

const router = Router();

// Google auths
router.get('/google', passport.authenticate('google'), (req, res) => 
    res.send(200));
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: "http://localhost:5173/" }), 
(req, res) => 
    res.redirect('http://localhost:5173/dashboard'));

// Github auths
router.get('/github', passport.authenticate('github', { failureRedirect: "http://localhost:5173/" }), 
(req, res) =>
    res.sendStatus(200));
router.get('/github/redirect', passport.authenticate('github'), (req, res) =>
    res.redirect('http://localhost:5173/dashboard'));


export default router;


// TODO: Change all URLS to prod URLS