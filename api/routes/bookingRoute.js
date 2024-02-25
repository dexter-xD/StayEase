import express from "express";
const router = express.Router();

import {
  createBooking,
  getAllBookings,
} from "../controllers/bookingController.js";

router.post("/createbooking", createBooking);
router.get("/bookings", getAllBookings);

export default router;
