//Accessibility for custom Clickable Elements
//to make non-button element behave like a accessible button

export function Accessibility(){
    const handleClick = () => {
        alert('Custom button clicked!');
    };
    return(
        <section>
            <h2>Accessibility</h2>
            <div role="button" tabIndex={0} style={{padding:'20px',backgroundColor:'yellow'}} onClick={handleClick}>
                Custom Accessible Button
            </div>
            <button onClick={handleClick}>Real button</button>
        </section>
    );

}