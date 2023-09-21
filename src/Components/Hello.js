import React from "react";


const Hello = ({name,children}) => {

    return(
        <div style={{backgroundColor: "black", color: "tomato", margin: "10px"}}>
            <h1>{name}</h1>
            <p> 16 inch </p>
             {/* {props.children} */}
                {children}
            <p> 1TB </p>
            <p> 16GB </p>

        </div>
    )
}

export default Hello;