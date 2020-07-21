import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Search from './components/search'
import Postjob from './components/postjob'
import Settings from './components/settings'
import Logout from './components/logout'
import Table from './components/table'


function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-8">
            <h1>Bolsa de empleos "Tigre de Web"</h1>
          </div>
          <div class="col-4">
            <div class="container">
              <div class="row">
                <Logout/>
                <Settings/>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
        
        </div>
        <div class="row justify-content-around">
          <div class="col-4">
            <Search/>
          </div>
          <div class="col-4">
            <Postjob/>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Table />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
