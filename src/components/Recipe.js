import React, { useContext } from 'react';
import { ModalContext } from './../context/ModalContext';

const Recipe = ({recipe}) => {
    //extraer valores del context
    const { setIdRecipe } = useContext(ModalContext);


    return(
        <div id={recipe.idDrink} className="col-md-4 mb-3">
            <div className="card">
                <h4 className="card-header">{recipe.strDrink}</h4>
                <img 
                    className="card-img-top" 
                    src={recipe.strDrinkThumb}
                    //alt={`${recipe.strDrink} image`}
                /> 
      
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={ () => setIdRecipe(recipe.idDrink)}
                    >
                        Learn more
                    </button>
                </div>
            </div>
        </div>
        
    );
}

export default Recipe;