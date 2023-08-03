// App.js

import React from "react";
import Title from "./component/Title";
// import Car from "./component/Example";
// import Timer from "./component/Example";
import CustomHook from "./component/CustomHooks"

// const cars =['Ford', 'BMW', 'Audi', 'Tesla', 'Ferari', ]


function App() {
  return (
    <>
      <Title name="TODO App" />
      {/* <Timer/> */}
      <CustomHook/>
    </>
  );
}

export default App;
