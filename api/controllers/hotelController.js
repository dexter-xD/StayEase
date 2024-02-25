import asyncHandler from "express-async-handler";
import Hotel from "../models/hotelModel.js";

// @desc    create a new hotel
// route POST /api/hotel/createhotel
// access public

const createHotel = asyncHandler(async (req, res) => {
  const { name, web, description, price, rooms, location, image_url, top } =
    req.body;

  try {
    const newHotel = new Hotel({
      name,
      web,
      description,
      price,
      rooms,
      location,
      image_url,
      top: top || false,
    });

    const createdHotel = await newHotel.save();
    res.status(201).json(createdHotel);
  } catch (error) {
    res.status(400).json({ message: "Invalid data: " + error.message });
  }
});

// @desc    Get top hotels
// route GET /api/hotel/tophotels
// access public

const getTopHotels = asyncHandler(async (req, res) => {
  try {
    const topHotels = await Hotel.find({ top: true });
    res.status(200).json(topHotels);
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
});

// @desc    Get all hotel
// route GET /api/hotel/allhotels
// access public

const getHotels = asyncHandler(async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(404);
    throw new Error("Server error : " + error.message);
  }
});

// @desc    Get one hotel
// route GET /api/hotel/singlehotel/:id
// access public

const getOneHotel = asyncHandler(async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(404);
    throw new Error("Server error : " + error.message);
  }
});

// @desc    Get hotels by location
// route GET /api/hotel/hotelsinlocation
// access public

const getLocationHotel = asyncHandler(async (req, res) => {
  const { location } = req.params;

  try {
    const hotels = await Hotel.find({ location });

    if (hotels.length === 0) {
      return res
        .status(404)
        .json({ message: "No hotels found in the specified location." });
    }

    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
});

export { createHotel, getTopHotels, getHotels, getOneHotel, getLocationHotel };
