import React, { createContext } from 'react'
import ComB from "./ComB";

const Detail = createContext();

const ComA = () => {
    return (
        <>
            < Detail.Provider value={"Yogesh Gaur"}>
               <ComB />
            </Detail.Provider>
        </>
    )
}

export default ComA;
export {Detail};




