import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  hotelName: {
    type: String,
    required: true,
  },
  hotelPrice: {
    type: Number,
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "Booked",
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
