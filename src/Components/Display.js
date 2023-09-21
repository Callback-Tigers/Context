import React,{useContext} from "react";
import CricketerContext from "../context/CricketerContext";

const Display = () => {
    //  console.log(useContext(CricketerContext)) //  {crickter: {…}, setCricketer: ƒ}
     const {crickter, setCricketer}  = useContext(CricketerContext) 

  
    return(
        <div>
            <h1> Accessing Global Values</h1>
            <p>Crickter is: {crickter.name}</p>
            <p>Age is: {crickter.age}</p>
            <p>Country is: {crickter.country}</p>
            <p>Retire is: {crickter.retire.toString()}</p>
            <p>Wickets is: {crickter.wickets}</p>
            <button onClick={()=>setCricketer({...crickter, age: crickter.age+1})}>Update Saching age</button>

        </div>
    )

}

export default Display;


{/* <CricketerContext.Consumer>
              {
                (info)=>( // info means value
                     <h1>Line 13: {info} </h1>
                )
              }
            </CricketerContext.Consumer> */}