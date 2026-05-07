//Basic events in React
//What is an Event?
//An action triggred by the user(mouse, keyboard, DOM).
//React uses camelCase attributes like onClick, onChange..
//React passes an event object (SynthenticEvent) to the handler.

export function EventBasics() {
    //Declari g a event handler function
    const handleClick = () => alert("Clicked");

    return(
        <section>
            <h2>Basic Events</h2>
            {/* Event binding */}
            <button onClick={handleClick}>Click me</button>
        </section>
    )
}
