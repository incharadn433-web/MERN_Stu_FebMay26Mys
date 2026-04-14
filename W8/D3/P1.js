//Validation and schema constraints
const mongoose = require("mongoose");
const { type } = require("node:os");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: { type: Number, min: 18 },
    role: {
        type: String,
        enum: ["admin", "user", "manager"]
    },
    email: {
        type: String,
        match: /.+@.+\..+/

    }
});
const User = mongoose.model("HookValidationUser", userSchema);

async function runValidationDemo() {
    try {
        //       const invalidUser = new User({
        //         age:15,
        //         role:"guest",
        //         email:"notvalidemail"
        //       });

        //       await invalidUser.validate();
        // }
        const invalidUser = new User({
            name: "Inchu",
            age: 19,
            role: "user",
            email: "notvalidemail@gmail.com"
        });

        await invalidUser.validate();
    }
    catch (error) {
        console.log("Validation errors found:");

        for (const fieldName in error.errors) {
            console.log(fieldName + ":", error.errors[fieldName].message);
        }
    }
}
runValidationDemo();