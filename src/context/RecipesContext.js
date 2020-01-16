import React, { createContext, useState } from 'react';

//Crear context
export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    //Crear states del context
    const [name, setRecipes] = useState([]);
    const [search, searchRecipes] = useState({
        ingredient: '',
        categorie: ''
    });


    return(
        <RecipesContext.Provider
            value={{
                searchRecipes
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    );
}

export default RecipesProvider;

