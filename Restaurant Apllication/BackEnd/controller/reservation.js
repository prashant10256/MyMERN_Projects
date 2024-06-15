import Errorhandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstname, lastName, email, phone, date, time } = req.body;
  if (!firstname || !lastName || !email || !phone || !date || !time) {
    return next(new Errorhandler("Please fill full reservation form", 400));
  }
  try {
    await Reservation.create({firstname, lastName, email, phone, date, time});
    res.status(200).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = object
        .values(error.errors)
        .map((err) => err.message);
      return next(new Errorhandler(validationErrors.join(" , "), 400));
    }
    return next(error);
  }
};
