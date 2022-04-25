import React from 'react';

import './App.css';

function App() {

  //create a function that returns a JSX element
  function sayHello(Title: string): JSX.Element {
    return <h1>Hello {Title}</h1>;
  }

  return (
    <div className="App">
      {sayHello('World')}
    </div>
  );
}

export default App;
