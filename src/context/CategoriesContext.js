import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

//Crear context
export const CategoriesContext = createContext();

//Provider. Es donde se encuentran las funciones y el state
const CategoriesProvider = (props) => {

    //Crear state del context
    const [categories, setCategories] = useState([]);

    //Llamar a la API(didMount)
    useEffect(() => {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categories = await axios.get(url);
            setCategories(categories.data.drinks)
        }
        getCategories();
    }, []);

    return(
        <CategoriesContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;