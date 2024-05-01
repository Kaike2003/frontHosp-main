import React from 'react';
import Router from './router';
import { AuthProvider } from './context/AunteticacaoContext';

function App() {
  return (
    <AuthProvider>
      <React.Fragment>
        <div className="App">
        </div>
        <Router />
      </React.Fragment>
    </AuthProvider>
  );
}

export default App;
