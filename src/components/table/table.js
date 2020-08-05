import React, { Component } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import './table.css';
// import Search from '../search';
// import Jobs from '../jobs/jobs';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { MTableToolbar } from 'material-table';
import PageviewIcon from '@material-ui/icons/Pageview';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import EditIcon from '@material-ui/icons/Edit';



const jobs = [
  {
    title: 'Designer',
    value: 'designer'
  },
  {
    title: 'Developer',
    value: 'developer'
  },
  {
    title: 'QA Engineer',
    value: 'qaengineer'
  },
  {
    title: 'Job Posting',
    value: 'search'
  },
  
];



class Table extends Component {
  

  state = {
    loading: true,
    data: {},
    dataAvail: null
    }

    componentDidMount() {

        axios.get('http://localhost:3500/jobs')
            .then(response => this.setState({ data: response.data, dataAvail: true }));

        //} else {
        //  console.log("!4");
        //  console.log(jobs[this.props.jobId - 1].title)
        //  axios.get('http://localhost:3500/jobs/category/'+jobs[this.props.jobId - 1].value)
        //  .then(response => this.setState({ data: response.data, dataAvail: true }));
        //}    
    }

  render() {
   

    const dataAvail = this.state.dataAvail;
    let table;
     if (dataAvail && this.props.jobId == 1) {
      table = <MaterialTable
        options={{ pageSize: parseInt(this.props.size), search: true ,actionsColumnIndex: -1}}
        columns={[
          { title: 'Location', field: 'location' },
          { title: 'Position', field: 'position' },
          { title: 'Category', field: 'category' },
          {
            title: 'View',  field: 'view',
            render: rowData => <Link to={"/jobdetailedit/"+rowData._id}><button type="button" id="view-btn" class="btn"><i class="fas fa-info-circle"></i></button></Link>
          },
          {
            title: 'Edit',  field: 'edit',
            render: rowData => <Link to={"/editjob/"+rowData._id}><button type="button" id="editjob-btn" class="btn"><i class="fas fa-edit"></i></button></Link>
          },
          
          
        ]}

        data={this.state.data}
        actions={[
          // {
          //   icon: PageviewIcon,
          //   tooltip: 'View Job',
          //   onClick: (event, rowData) => {
          //     let id = rowData._id
              
          //     Link("/jobdetail/"+id) }
          // },
          // {
          //   icon: EditIcon,
          //   tooltip: 'Edit Job',
          //   onClick: (event, rowData) => {
          //     let id = rowData._id
              
          //     window.location = "/postjob/"+id}
          // },
            {
                icon: RemoveCircleIcon,
                tooltip: 'Remove Job',
                onClick: (event, rowData) => {
                    let id = rowData._id
                    
                    axios.delete("http://localhost:3500/jobs/" + id, { params: { _id: id } }).then(
                        response => this.componentDidMount()
                    )

                }
            }
          ]}

        title=''
        components={{
          Toolbar: props => (<div>
            <MTableToolbar {...props} />
            <div style={{ padding: '0px 10px' }}>
            </div>
          </div>

          )
        }}

      />;
    }

      if (dataAvail && this.props.jobId == 4) {
          table = <MaterialTable
              options={{ pageSize: parseInt(this.props.size), search: true, actionsColumnIndex: -1 }}
              columns={[
                  { title: 'Location', field: 'location' },
                  { title: 'Position', field: 'position' },
                  { title: 'Category', field: 'category' },
                  {
                    title: 'View',  field: 'view',
                    render: rowData => <Link to={"/jobdetail/"+rowData._id}><button type="button" id="createuserbtn-btn" class="btn"><i class="fas fa-info-circle"></i></button></Link>
                  }
              ]}

              data={this.state.data}
              // actions={[
              //     {
              //         icon: PageviewIcon,
              //         tooltip: 'View Job',
              //         onClick: (event, rowData) => {
              //             let id = rowData._id
                          
              //             Link("/jobdetail/"+id)
              //         }
              //     }
              // ]}

              title=''
              components={{
                  Toolbar: props => (<div>
                      <MTableToolbar {...props} />
                      <div style={{ padding: '0px 10px' }}>
                      </div>
                  </div>

                  )
              }}

          />;
      }

    return (
      <div style={{ maxWidth: '100%' }}>
        {table}
      </div>
    );
  }
}

export default Table;
