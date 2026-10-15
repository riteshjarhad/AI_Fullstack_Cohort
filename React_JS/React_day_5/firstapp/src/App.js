import React from "react";

// component
const App=()=>{

  // every component must return JSX code (UI)
  return(
    <>
    <h1>Welcome to Stateless Functional Component</h1>
    </>
  )
}
export default App;

// normal JS function
const App2=()=>{
  console.log("Hello App2");
}

let name="Ritesh";

export {App2,name}

// import and export
// each and every JS file is a module and each module we need to export
// for reusability

// default export- only one
// named export- multiple we can export