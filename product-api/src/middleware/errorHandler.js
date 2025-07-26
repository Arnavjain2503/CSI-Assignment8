// src/middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Check for specific error types and customize the response if needed
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }

  // Default error handling
  res.status(err.status || 500).json({
    message: err.message || 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? {} : err.stack
  });
};

// Use default export
export default errorHandler;
