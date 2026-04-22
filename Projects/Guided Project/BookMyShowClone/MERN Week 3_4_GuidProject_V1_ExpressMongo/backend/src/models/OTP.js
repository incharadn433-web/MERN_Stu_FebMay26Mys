const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        lowercase:true,
        index:true,
        required:true
    },
    otp:{
        type:String,
        required:true,
        select:false
    },
    expiresAt:{
        type:Date,
        required:true,
    },
    attempts:{
        type:Number,
        default:0,
    }
},{
    timestamps:true
});

//TTL index
otpSchema.index({expireAt:1},{expireAfterSeconds:0});

//Export
module.exports = mongoose.model("OTP",otpSchema);