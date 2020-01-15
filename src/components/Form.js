import React from 'react';

const Form = () => {
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