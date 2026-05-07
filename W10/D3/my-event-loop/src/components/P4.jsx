//Synthetic event vs Native DOM events
//Synthetic event:
//A wrapper created by react around the browser's native event
//Gives a consistent API across browsers 
// works similarly to native DOM events
// Still allows access to the original browser events via 
//event.nativeEvent

//Why does React use it?
//To make event handling behave consistantly
//To simplify cross-browser differences 
//To integrate smoothly with React's event system

//How Synthetic event works:
//Component renders: A button appears on the screen
  //handleClick is defined but it is not executed

// USer Clicks the button:
  //Browser creates a native click event
  //React wraps that native event in SyntheticEvent
  //React passes the SyntheticEvent to the handleClick function
  
  //event refers to the SyntheticEvent
  //event.target gives us the HTML elements
  