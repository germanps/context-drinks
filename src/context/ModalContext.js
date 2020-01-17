import React, { createContext, useEffect, useState } from 'react';
import axion from 'axios';

//crear context
export const ModalContext = createContext();

const ModalProvider = (props) => {
    //state del provider
    const [ idrecipe, setIdRecipe ] = useState(null);
    return(
        <ModalContext.Provider
            value={{
                setIdRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;