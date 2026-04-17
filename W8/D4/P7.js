//Generating OTP using crypto and hashing it using bcrypt
const crypto = require("crypto");
const bcrypt = require("bcrypt");

function generateOTP(length = 6){
    return crypto.randomInt(100000,999999).toString();
}

async function hashOTP(otp){
    return await bcrypt.hash(otp,10); //hash is convert text readable into unreadable format
}

async function verifyOTP(input,hash){
    return await bcrypt.compare(input,hash); 
}

(async ()=>{
    const otp = generateOTP();
    console.log("Generated otp:",otp);

    const hashOtp = await hashOTP(otp);
    console.log("Hashed otp:",hashOtp);

    console.log("Verification:",await verifyOTP(otp,hashOtp));
})();