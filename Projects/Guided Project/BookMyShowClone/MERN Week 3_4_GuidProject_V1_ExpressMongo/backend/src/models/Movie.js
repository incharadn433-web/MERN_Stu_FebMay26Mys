const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Movie title is required"],
        index:true
    },
    genre:{
        type:String,
        required:[true,"Genre is required"],
        enum:[
            "Comedy",
            "Action",
            "Horror",
            "Drama",
            "Romance",
            "Thriller",
            "Sci-Fi"
        ],
        index:true,
    },
    rating:{
        type:Number,
        required:true,
        min:[1,"Rating must be atleast 1"],
        max:[5,"Rating cannot exceed 5"],
    },
    duration:{
        type:Number,
        required:[true,"Duration is required"],
    },
    releaseDate:{
        type:Date,
        required:[true,"Release date is required"],
        index:true
    },
    poster:{
        type:String,
        default: "",  
     },
     language:{
        type:String,
        index:true,
     },
     isactive:{
        type:Boolean,
        default:true,
     },
    },{
        timestamps:true,
    });
//compound index
movieSchema.index({genre:1,rating:-1});

//Text index
movieSchema.index({title:"text"});

//Virtual field
movieSchema.virtual("isReleased").get(function(){
    return this.releaseDate<=new Date();
});

module.exports = mongoose.model("Movie",movieSchema);