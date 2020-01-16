import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';
import { RecipesContext } from './../context/RecipesContext';


const Form = () => {

    //crear state local para guardar la busqueda
    const [ search, setSearch ] = useState({
        name: '',
        categorie: ''
    });

    //leer los contenidos
    const getRecipeData = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    //recoger categorias desde el context
    const { categories } = useContext(CategoriesContext);
    //recoger búsqueda desde el context
    const { searchRecipes } = useContext(RecipesContext);

    return(
        <form
            className="col-12"
            onChange={getRecipeData}
            onSubmit={ e => {
                e.preventDefault()
                searchRecipes(search);
            } }
            
        >
            <fieldset className="text-center">
                <legend>Search drinks by categorie or ingredient</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Name of drink"
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categorie"
                    >
                        <option>-- Select categorie --</option>
                        {categories.map((categorie, index) => {
                            return(
                                <option 
                                    value={categorie.strCategory}
                                    key={index}
                                >
                                    {categorie.strCategory}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        name="name"
                        className="btn btn-primary btn-block"
                        type="submit"
                        value="Search"
                    />
                </div>
            </div>
        </form>
    )
}

export default Form;