const express = require("express");
const api_router = express.Router();
const video_router = require("./video");
const auth_router = require("./auth");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// api_router.use(/\/((?!login).)*/, (req, res, next) => {
//   const token = req.headers.authorization;
//   if (token) {
//     try {
//       const payload = jwt.verify(token, process.env.JWT_SECRET);
//       req.userId = payload.userId;
//       next();
//     } catch (error) {
//       if (
//         typeof error === jwt.JsonWebTokenError ||
//         typeof error === jwt.TokenExpiredError
//       ) {
//         res.statusCode = 401;
//         res.send({
//           error: "Unauthorized access",
//         });
//       } else {
//         res.statusCode = 500;
//         res.send({
//           error: "Internal Server Error",
//         });
//       }
//     }
//   } else {
//     res.statusCode = 401;
//     res.send({
//       error: "Unauthorized access",
//     });
//   }
// });

api_router.use("", auth_router);
api_router.use("", video_router);

module.exports = api_router;
