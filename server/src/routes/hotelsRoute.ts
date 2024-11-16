import express, {Request, Response} from "express";
import { getHotels, getSingleHotel, addNewHotel, updateHotel, removeHotel } from "../controllers/hotelController";

const router = express.Router();


router.get("/", getHotels);

router.get("/:id", getSingleHotel);

router.post("/addHotel", addNewHotel);

router.put("/updateHotel/:id", updateHotel);

router.delete("/deleteHotel/:id", removeHotel);

export default router;