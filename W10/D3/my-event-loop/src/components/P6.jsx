// Event Delegation in React
// Instead of attaching a separate click handler to every 
//element we attach one handler to the parent
//Parent -> Child
//Bubbles up to the parent

//Why is it used?
//Reduces repeated event handlers
//Code is cleaner and manageble
//Its useful when rendering many similar items

import { useState } from "react";
export function EventDelegation() {
    const [selectedItem, setSelectedItem] = useState('None');

    const handleClick = (event) => {
        const clickedItem = event.target.closest('li[data-item]');

        if(!clickedItem) return;

        const itemName = clickedItem.dataset.item;
        console.log('Clicked item:', itemName);
        setSelectedItem(itemName);
    };
    return(
        <section>
            <h2>Event Delegation</h2>
            <ul onClick={handleClick}>
                <li data-item="Mobile">Mobile</li>
                <li data-item="Car">Car</li>
                <li data-item="Laptop">Laptop</li>
            </ul>
            <p>Selected Item: {selectedItem}</p>
        </section>
    )
}