import React from 'react';
import Header from './Header';
import KegControl from './KegControl';


function App() {
  return (
    <>
      <Header /> 
      <div className="container">
        <div className="card col-lg-6 offset-lg-3 p-3 mt-3" id="custom-card">
          <KegControl />
        </div>
      </div>
    </>
  );
}

export default App;
