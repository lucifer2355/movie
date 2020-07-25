import React from "react";

function App() {
  return (
    <div className='app'>
      <h1>Hello World</h1>
      <h1>{process.env.REACT_APP_API}</h1>
    </div>
  );
}

export default App;
