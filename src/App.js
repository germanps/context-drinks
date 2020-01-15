import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CategoriesProvider from './context/CategoriesContext';

function App() {
  return (
    <CategoriesProvider>
      <div className="App">
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Form />
          </div>
        </div>
      </div>
    </CategoriesProvider>
  );
}

export default App;
