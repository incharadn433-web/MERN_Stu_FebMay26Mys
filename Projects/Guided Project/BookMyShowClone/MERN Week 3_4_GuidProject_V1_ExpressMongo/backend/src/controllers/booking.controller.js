const bookingservice = require("../services/booking.service");

//create booking
exports.createBooking = async (req,res,next)=>{
    try{
        const booking = await bookingService.createBooking(
            req.user._id,
            req.body
        );
        res.status(201).json({
            success:true,
            message:"Booking confirmed",
            data:booking
        });

    }
    catch(error){
        next(error);
    }
};

//Get bookings
exports.getMyBooking = async(req,res,next)=>{
    try{
        const bookings = await bookingService.getUserBookings(req.user._id);
         res.status(200).json({
            success:true,
            message:"Booking fetched",
            data:booking
        });
    }
    catch(error){
        next(error);
    }

};

//cancel booking
exports.cancelBooking = async(req,res,next)=>{
    try{
          await bookingService.cancelBooking(req.params.id,req.user._id);
         res.status(200).json({
            success:true,
            message:"Bookings cancelled",
            data:booking
        });
    }
    catch(error){
        next(error);
    }

};