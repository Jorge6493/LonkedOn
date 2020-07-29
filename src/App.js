import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Jobs from './components/jobs/jobs';



function App() {
  return (
    <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/jobs/:jobId" component={Jobs} exact/>
             {/* <Route path="/contact" component={Contact}/> */}
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
  );
}

export default App;
