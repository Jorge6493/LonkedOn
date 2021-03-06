import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import {Home} from './components/home'
import Jobs from './components/jobs/jobs';
// import PostjobPage from './components/postjob-page/postjob-page';

import PostJobForm from './components/postjobform/postjobform';
import JobDetail from './components/jobdetail/jobdetail';
import SettingsView from './components/settingsview/settingsview';
import CreateUser from './components/createuser/createuser';
import Login from './components/login/login';
import Search from './components/search/search';
import EditCategory from './components/editcat/editcat';
import EditJobs from './components/editjobs/editjobs';
import AddCatView from './components/addcatview/addcatview';

import {TypeuserProvider} from './components/typeuser-context/typeuser-context'
import EditJobForm from './components/editjobform/editjobform';
import JobDetailEdit from './components/jobdetailedit/jobdetailedit';

// const Context_type_of_user = React.createContext("user");


class App extends Component {
  state = {
    username: "",
    password: "",
    type_of_user: ""
  }

  changeUserData = (data) => {
    // console.log('changeuserdata')
    this.setState({
      username: data.username, 
      password: data.password, 
      type_of_user: data.type_of_user
    });
  }

  render() {
    return (
      <div>
        
        <BrowserRouter>
        <TypeuserProvider>
           {/* <Navigation /> */}
           <Switch>
             <Route 
              path="/"  
              render={(props) => (
                <Login {...props} changeUserData={this.changeUserData} />
              )}
              exact/>
             <Route 
              path="/home" 
              render={(props) => (
                <Home {...props} user={this.state} />
              )}
              exact/>

              <Route path="/jobs/:jobId" component={Jobs} exact/>
              <Route path="/postjob" component={PostJobForm} exact />
              <Route path="/postjob/:jobId" component={PostJobForm} exact />
              <Route path="/editjob/:jobId" component={EditJobForm} exact />
              <Route path="/jobdetail/:jobId" component={JobDetail} exact/>
              <Route path="/jobdetailedit/:jobId" component={JobDetailEdit} exact/>
              <Route path="/createuser" component={CreateUser} exact/>
              <Route path="/settings" component={SettingsView} exact/>
              <Route path="/login" component={Login} exact/>
              <Route path="/search" component={Search} exact/>
              <Route path="/editcat" component={EditCategory} exact/>
              <Route path="/editjobs" component={EditJobs} exact/>
              <Route path="/addcatview" component={AddCatView} exact/>
              <Route component={Error}/>
           </Switch>

        </TypeuserProvider>
          
         
        
      </BrowserRouter>
        
      </div>
    );
  }

}

export default App;
