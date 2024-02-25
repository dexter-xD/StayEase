import asyncHandler from "express-async-handler";
import Booking from "../models/bookingModel.js";

// @desc    create a new booking
// route POST /api/booking/createbooking
// access public

const createBooking = asyncHandler(async (req, res) => {
  const { hotelName, hotelPrice } = req.body;

  try {
    const booking = new Booking({
      hotelName,
      hotelPrice,
    });

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
  } catch (error) {
    res.status(400).json({ message: "Invalid data: " + error.message });
  }
});

// @desc    get bookings
// route GET /api/booking/bookings
// access public

const getAllBookings = asyncHandler(async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
});

export { createBooking, getAllBookings };
