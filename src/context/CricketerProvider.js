import React,{useState} from "react";
import CricketerContext from "./CricketerContext";

const CricketerProvider = (props) => {
    const [crickter, setCricketer] = useState({
        name: "Sachin Tendulkar",
        age: 51,
        country: "India",
        retire: true,
        wickets: 200
    })

    return(
        <CricketerContext.Provider value={{
            crickter: crickter,
            setCricketer: setCricketer
        }}>
            {props.children}

        </CricketerContext.Provider>
    )
}

export default CricketerProvider;


























// import React from "react";
// import CricketerContext from "./CricketerContext";


// const CricketerProvider = (props) => {

//     let a = 10

//     return(
//         <CricketerContext.Provider value={a}>

//             {props.children}

//         </CricketerContext.Provider>
//     )

// }

// export default CricketerProvider;


// {/* <CricketerProvider x={10}/> */}



// let obj = {
//     a: 10,
//     b:20
// }

// obj.c = 100 // provider 

// console.log(obj.a) // 