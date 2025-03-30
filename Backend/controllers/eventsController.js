import { Events } from "../models/eventsSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createEvents = async (req, res, next) => {
  const { name, date, location, description } = req.body;

  try {
    if (!name || !date || !location || !description) {
      return handleValidationError("Please fill all the required fields!", 400, next);
    }

    // Create the event
    const newEvent = await Events.create({ name, date, location, description });

    res.status(200).json({
      success: true,
      message: "Event is Created!",
      event: newEvent
    });
  } catch (err) {
    next(err);
  }
};

export const getAllEvents = async (req, res, next) => {
  try {
    // Fetch all events from the database
    const events = await Events.find();
    
    res.status(200).json({
      success: true,
      events
    });
  } catch (err) {
    next(err);
  }
};
