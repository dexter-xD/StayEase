import express from "express";
const router = express.Router();

import {
  getHotels,
  getTopHotels,
  getOneHotel,
  getLocationHotel,
  createHotel,
} from "../controllers/hotelController.js";

router.post("/createhotel", createHotel);
router.get("/tophotels", getTopHotels);
router.get("/allhotels", getHotels);
router.get("/singlehotel/:id", getOneHotel);
router.get("/hotelsinlocation/:location", getLocationHotel);

export default router;
