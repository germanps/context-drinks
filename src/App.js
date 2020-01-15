import React from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
