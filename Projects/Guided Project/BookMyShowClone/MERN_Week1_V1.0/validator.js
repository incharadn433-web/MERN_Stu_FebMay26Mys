// Callback based validation functions

function validateMovieSelection(movies,movieId,Callback){
    const selectedMovie = movies.find((movie)=>movie.id === movieId);

    if(!selectedMovie){
        return Callback("Invalid movie selection.Choose a valid movie ID",null);
    }
    Callback(null,selectedMovie);

}

function validateTimeSelection(movies,selectedTime,Callback){
    const selectedShowtime = movie.showtimesfind((show)=>show.time.toLowerCase()===selectedTime.toLowerCase());

    if(!selectedShowtime){
        return Callback("Invalid time slot selection.Choose a valid time slot",null);
    }
    Callback(null,selectedShowtime);
}

function validateSeatCount(seatCount,movieId,Callback){
    if(!isNaN(seatCount) || seatCount <=0){
        return Callback("Invalid seat count.Enter a valid seat count",null);
    }
    Callback(null,seatCount);

}

module.exports = {
   validateMovieSelection,
   validateTimeSelection,
   validateSeatCount
};