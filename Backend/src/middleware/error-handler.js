export const errorHandler = (err, req, res, next) => {
  console.log('error in request:',err.message)
  return res.status(500).json({
    status: false,
    message: 'Something went wrong try again later',
  });
};