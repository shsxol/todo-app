// App.js

import React from "react";
import Title from "./component/Title";
import Example from "./component/Example";

const cars =['Ford', 'BMW', 'Audi']


function App() {
  return (
    <>
      <Title name="TODO App" />
      <Example cars= {cars}/>
    </>
  );
}

export default App;
