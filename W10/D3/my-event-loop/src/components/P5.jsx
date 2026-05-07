//useCallback with Event Handlers
import { useState, useCallback, memo } from "react";
const ChildButton = memo(function ChildButton({ onClick }) {
    console.log("ChildButton rendered");
    return (
    <button onClick={onClick}>Increment</button>
    );
});

export function ParentComponent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []); // Empty dependency array means this function is created only once

    return (
        <section>
            <h2>useCallback in events example</h2>
            <p>Count: {count}</p>
            <ChildButton onClick={handleClick} />   
        </section>
    );
}