import React  from "react";
import { BrowserRouter,Router, Route, Link, Switch } from 'react-router-dom'
import Employee1 from'./Employee1.js'
import Navb from'./Navb.js'

function App() {
  return (
    <BrowserRouter>
    <Navb></Navb>
    <Switch>
      <Route path='/Employee' component={Employee1}/>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
