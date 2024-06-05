import express from "express"
import { bookVisit, cancelBooking, createUser, getAllBookings, toFav } from "../controllers/userCntrl.js"
import jwtCheck from "../config/auth0Config.js"


const router = express.Router()

router.post("/register",  createUser, jwtCheck)
router.post("/bookVisit/:id",  bookVisit)
router.get("/allBookings", getAllBookings)
router.post("/removeBooking/:id", cancelBooking)
router.post("/toFav/:id", toFav)

export {router as userRoute}