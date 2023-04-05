// import
import React from "react";
import Child from './Child'
import { useState } from "react";

// set up /naming and exporting
export default function Parent() {

    //state 
    //hooks
    const [myState, setMyState] = useState()

  return (
    <div>
      <h1>I am the Parent Component</h1>
      {/* call on another component */}
      <Child />
      <br></br>
    </div>
  );
}
