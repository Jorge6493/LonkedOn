import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Jobs from './components/jobs/jobs';
import PostjobPage from './components/postjob-page/postjob-page';

import PostJobForm from './components/postjobform/postjobform';
import JobDetail from './components/jobdetail/jobdetail';


function App() {
  return (
    <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/jobs/:jobId" component={Jobs} exact/>
             {/* <Route path="/postjob" component={PostjobPage}/> */}
             <Route path="/postjob" component={PostJobForm} exact/>
             <Route path="/jobdetail" component={JobDetail} exact/>
             {/* <Route path="/contact" component={Contact}/> */}
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
  );
}

export default App;
