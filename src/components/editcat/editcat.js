import React from 'react';
import Logout from '../logout';
import Settings from '../settings';
import HomeButton from '../homebutton/homebutton';
import Postjob from '../postjob';
import AddCategory from '../addcat/addcat';
import Table from '../table';
import axios from 'axios';
import MaterialTable, { MTableToolbar } from 'material-table';
import PageviewIcon from '@material-ui/icons/Pageview';
import { Link } from 'react-router-dom';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import EditIcon from '@material-ui/icons/Edit';

export default class EditCategory extends React.Component {

    state = {
        loading: true,
        data: {},
        dataAvail: null
      }

    componentDidMount(){
        axios.get('http://localhost:3500/categories')
        .then(response => this.setState({ data: response.data, dataAvail: true }));
    }
        
      

    render() {
        console.log(this.state)

        const dataAvail = this.state.dataAvail;
        let table;
        if (dataAvail) {
          table = <MaterialTable
            options={{ pageSize: 20, search: true ,actionsColumnIndex: -1}}
            columns={[
              { title: 'Category', field: 'category' }
            ]}
    
            data={this.state.data}
            actions={[
              {
                icon: RemoveCircleIcon,
                tooltip: 'Delete',
                onClick: (event, rowData) => {
                  let id = rowData._id                  
                    axios.delete("http://localhost:3500/categories/" + id, { params: { _id: id } }).then(response => this.componentDidMount() )
                }
              }
            ]}
    
            title='All Categories'
            components={{
              Toolbar: props => (<div>
                <MTableToolbar {...props} />
                <div style={{ padding: '0px 10px' }}>
                  <h5>
                  </h5>
                </div>
              </div>
    
              )
            }}
    
          />;
        }


        return (
            <div class="container">
                <div class="row float-right mr-2">
                    <Logout />
                    <Settings />
                </div>
                <h1 class="ml-5 pt-4">Bolsa de Empleos "Tigre de Web"</h1>
                <br />
                <div class="row">
                    <div class="input-group col-sm-6">
                        <HomeButton />
                    </div>
                    <div class="input-group col-sm-2 ml-auto">
                        <Postjob />
                    </div>
                </div>
                <br />
                <div class="row">
                    {/* <h3>All Categories</h3> */}
                    <div class="input-group col-sm-2 ml-auto float-right">
                        <AddCategory />
                    </div>
                </div>
                    <br></br>
                <div class="container">
                    {table}
                </div>
            </div>
        )
    }
}