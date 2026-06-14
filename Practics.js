function fetchdata(){
   return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data received");
        })
    });

    async function fetch(){
        const data = await fetchdata();
        console.log(data);
    }
}
fetch();