import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Jobs from './components/jobs/jobs';
// import PostjobPage from './components/postjob-page/postjob-page';

import PostJobForm from './components/postjobform/postjobform';
import JobDetail from './components/jobdetail/jobdetail';
import SettingsView from './components/settingsview/settingsview';
import CreateUser from './components/createuser/createuser';
import Login from './components/login/login';
import Search from './components/search/search';


function App() {
  return (
    <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
             <Route path="/" component={Login} exact/>
             <Route path="/jobs/:jobId" component={Jobs} exact/>
             <Route path="/postjob" component={PostJobForm} exact/>
             <Route path="/jobdetail/:jobId" component={JobDetail} exact/>
             <Route path="/createuser" component={CreateUser} exact/>
             <Route path="/settings" component={SettingsView} exact/>
             <Route path="/login" component={Login} exact/>
             <Route path="/search" component={Search} exact/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
  );
}

export default App;
