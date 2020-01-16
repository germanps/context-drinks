import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CategoriesProvider from './context/CategoriesContext';
import RecipesProvider from './context/RecipesContext';

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <div className="App">
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
          </div>
        </div>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
