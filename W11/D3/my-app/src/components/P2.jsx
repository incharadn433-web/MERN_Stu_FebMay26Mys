import { useEffect, useState } from "react";

//useEffect Lifecycle
export function UseEffectLifecycle(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("Effect 1: runs after every render");
    });
}