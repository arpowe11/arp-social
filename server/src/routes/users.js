import express from "express";

const router = express.Router();

// Get logged-in user
router.get("/user", (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user); // Passport attaches the user to req.user
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
});

// Logout user
router.post("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    res.json({ message: "Logged out successfully" });
  });
});

export default router;
