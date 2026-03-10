//finally function
function example(){
    try{
        console.log("Example in try clock");
        return "TRY_RETURN"
    }
  finally {
console.log("Example retult:",example());
}
}
//return in catch and still not finally
function example(){
    try{
    try{
        throw new Error("New error");
    }
    catch(e){
        console.log("Example 1:caught error");
        return 10;

    }
    finally{
        console.log("Example 1:finally still runs")
    }
}
catch(e){
    console.log("Example 1 outer catch: ",e.message);
}
}
console.log("Example 1:",example());