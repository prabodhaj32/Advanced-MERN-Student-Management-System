// Handles validation and custom errors
export const handleValidationError = (message, statusCode = 400, next) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return next(error); // Ensure the error is passed properly
};

// General error-handling middleware
export const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err.message);

  if (res.headersSent) {
    return next(err); // Prevent multiple responses
  }

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};
