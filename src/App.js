import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Header from './components/header/header';



function App() {
  return (
    <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/header/:jobId" component={Header} exact/>
             {/* <Route path="/contact" component={Contact}/> */}
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
  );
}

export default App;
