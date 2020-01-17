import React, { useContext, useState } from 'react';
import { ModalContext } from './../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({recipe}) => {

    //Cofiguracion modal materialUI
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    //Formatear info de los ingredientes
    const showIngredients = info => {
        let ingredients = [];
        for (let i = 1; i < 16; i++) {
           if(info[`strIngredient${i}`] !== null && info[`strIngredient${i}`] !== ''){
                ingredients.push(
                    <li key={i}>
                        {info[`strIngredient${i}: `]} {info[`strMeasure${i}`]}
                    </li>
                )
           }       
        }
        return ingredients;
    }


    //extraer valores del context
    const { inforecipe, setIdRecipe, setInfoRecipe } = useContext(ModalContext);

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
                        onClick={ () => {
                            setIdRecipe(recipe.idDrink);
                            handleOpen();
                        }}
                    >
                        Learn more
                    </button>
                    <Modal
                        open={open}
                        onClose={() => {
                            handleClose();
                            setIdRecipe(null);//reset id cuando se cierra el modal
                            setInfoRecipe({});//reset de la recipe para que no salga previamente en el modal al elegir la siguiente
                        }}
                        
                        
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{inforecipe.strDrink}</h2>
                            <h3 className="mt-4">Instruccions</h3>
                            <p>{inforecipe.strInstructions}</p>
                            <img className="img-fluid my-4" src={inforecipe.strDrinkThumb} />
                            <h3>Ingredients</h3>
                            <ul>
                                {showIngredients(inforecipe)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
        
    );
}

export default Recipe;