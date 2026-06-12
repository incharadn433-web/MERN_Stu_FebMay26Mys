export default function SearchShortcut() {
    function handleKeyDown(){
        if(event.key === 'Enter'){
            alert('Search initiated!');
        }
         if(event.key === 'Escape'){
            alert('Search Cleared');
        }
    }
    return(
        <section>
            <h2>Keyboard Shortcut</h2>
            <input type="text" placeholder="Press Enter" onKeyDown={handleKeyDown} />
        </section>
    )
}