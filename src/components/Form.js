import React, {useContext} from 'react';
import { CategoriesContext } from '../context/CategoriesContext';


const Form = () => {

    const { categories } = useContext(CategoriesContext)

    return(
        <form
            className="col-12"
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