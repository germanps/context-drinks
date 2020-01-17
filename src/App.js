import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import RecipesList from './components/RecipesList';
import CategoriesProvider from './context/CategoriesContext';
import RecipesProvider from './context/RecipesContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <div className="App">
            <Header />
            <div className="container mt-5">
              <div className="row">
                <Form />
              </div>
              <RecipesList />
            </div>
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
