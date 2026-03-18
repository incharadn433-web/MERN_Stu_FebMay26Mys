//Handling errors with try/catch

function loadCustomerProfile(){
    return new Promise(function(resolve,reject){
        const isServiceAvailabel = true;

        if(isServiceAvailabel){
            resolve("Success! Customer profile loaded.");
        }
        else{
            reject("Unsuccessful! Customer profile unavailabel.");
        }
    });
}

async function showCustomerProfile(){
    try{
        const message = await loadCustomerProfile();
        console.log(message);
    }
    catch(error){
        console.error("Error:",error);
    };
    
}
showCustomerProfile();

