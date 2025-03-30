// controllers/announcementController.js
import { Announcement } from "../models/announcementSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

// Create an announcement
export const createAnnouncement = async (req, res, next) => {
  const { announcement } = req.body;

  try {
    if (!announcement) {
      return handleValidationError("Please Fill Form!", 400, res);
    }

    await Announcement.create({ announcement });

    res.status(200).json({
      success: true,
      message: "Announcement Created!",
    });
  } catch (err) {
    next(err);
  }
};

// Get all announcements
export const getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await Announcement.find();
    res.status(200).json({
      success: true,
      announcements,
    });
  } catch (err) {
    next(err);
  }
};
