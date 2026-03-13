function tagPassword(password){

    if (typeof password !== "string") {
        return "INVALID";
    }

    if (password.length < 8) {
        return "WEAK";
    }

    if (password.length >= 8 && password.length < 12) {
        return "MEDIUM";
    }

    if (password.length >= 12) {
        return "STRONG";
    }
}

console.log(tagPassword("vic"));
console.log(tagPassword(123));
console.log(tagPassword("abcde1234"));
console.log(tagPassword("vicbcn123456"));