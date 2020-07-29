import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Jobs from './components/jobs/jobs';
// import PostjobPage from './components/postjob-page/postjob-page';

import PostJobForm from './components/postjobform/postjobform';
import JobDetail from './components/jobdetail/jobdetail';
//import Login from './components/createuser/login'
import SettingsView from './components/settingsview/settingsview';
import CreateUser from './components/createuser/createuser';


function App() {
  return (
    <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/jobs/:jobId" component={Jobs} exact/>
             <Route path="/postjob" component={PostJobForm} exact/>
             <Route path="/jobdetail" component={JobDetail} exact/>
             <Route path="/createuser" component={CreateUser} exact/>
             <Route path="/settings" component={SettingsView} exact/>
             {/* <Route path="/contact" component={Contact}/> */}
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
  );
}

export default App;
