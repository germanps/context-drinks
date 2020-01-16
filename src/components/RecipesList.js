import React, {useContext} from 'react';
import {RecipesContext} from './../context/RecipesContext';
import Recipe from './Recipe';


const RecipesList = () => {

    //Extraer recetas de la consulta del context
    const {recipes} = useContext(RecipesContext);
    console.log(recipes)

    return(
        <div className="row">
            {recipes.map( recipe => {
                return(
                    <Recipe 
                        key={recipe.idDrink}
                        recipe={recipe}
                    />
                );
            })}
        </div>
    );
}

export default RecipesList;