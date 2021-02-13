import React from 'react';
import Header from './Header';
import KegControl from './KegControl';


function App() {
  return (
    <>
      <Header /> 
      <div className="container">
        <div className="card col-md-8 offset-md-2 p-3">
          <KegControl />
        </div>
      </div>
    </>
  );
}

export default App;
