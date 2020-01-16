import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Crear context
export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    //Crear states del context
    const [name, setRecipes] = useState([]);
    const [search, searchRecipes] = useState({
        ingredient: '',
        categorie: ''
    });
    const [ consult, setConsult ] = useState(false);


    const {ingredient,categorie} = search;

    useEffect( () => {
        if(consult){
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${categorie}`;
                const recipe = await axios.get(url);
                setRecipes(recipe.data.drinks);
            }
            getRecipes();
        }
      
    }, [search])


    return(
        <RecipesContext.Provider
            value={{
                searchRecipes,
                setConsult
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    );
}

export default RecipesProvider;

