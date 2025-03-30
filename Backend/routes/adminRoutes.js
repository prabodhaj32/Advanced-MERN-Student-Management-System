// routes/adminRoutes.js
import express from 'express';
const router = express.Router();

// Example POST route to create an admin (you can change this logic based on your needs)
router.post('/', (req, res) => {
  const { name, email } = req.body;
  
  // Logic for creating a new admin, e.g., saving to database
  // For example, we'll just log the new admin to the console for now
  console.log('New Admin:', { name, email });

  res.status(201).json({
    message: "Admin created successfully",
    admin: { name, email },
  });
});

export default router;