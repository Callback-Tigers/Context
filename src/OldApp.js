import React from "react";
import Hello from "./Components/Hello";
import AboutIphone from "./Components/AboutIphone";

const OldApp = () => {
    return(
        <div>
            <Hello />

      {/* // 2nd one: */}
            <Hello 
               name = "Macbook Pro"
            > 
               
               <h1>Hello</h1>
               <p>Hii</p>
               <AboutIphone />
               <p> $1200 </p>


            </Hello>
               
              
           


            <Hello /> 
          
        </div>
    )
}

export default OldApp;



// find a way to only access first children