import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

//crear context
export const ModalContext = createContext();

const ModalProvider = (props) => {
    //state del provider
    const [ idrecipe, setIdRecipe ] = useState(null);
    const [ recipe, setRecipe] = useState({});
    //cuando llega un id nuevo, llama a la api
    useEffect( () => {
        const getRecipe = async () => {
            if(!idrecipe) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;
            const result = await axios.get(url);
            setRecipe(result.data.drinks[0]);
        }
        getRecipe();
    }, [idrecipe])
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