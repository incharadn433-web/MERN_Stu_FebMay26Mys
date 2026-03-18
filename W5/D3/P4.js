//Combining multiple promise-based steps with asnc/await

function getOrderId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(501)
        },500);
    })
}
function getOrderDetails(orderId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id:orderId,
                product:"Laptop",
                quality:2
            });
        });
    });
}
async function showOrderSummary() {
    const orderId = await getOrderId();
    console.log("order id:",orderId);

    const orderDetails = await getOrderDetails(orderId);
    console.log("Product:",orderDetails.product);
    console.log("Quantity:",orderDetails.quality);
    
}
showOrderSummary();