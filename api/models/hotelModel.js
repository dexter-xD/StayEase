import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  web: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  top: {
    type: Boolean,
    default: false,
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;
