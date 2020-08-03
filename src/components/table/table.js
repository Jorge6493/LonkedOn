import React, { Component } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import './table.css';
// import Search from '../search';
// import Jobs from '../jobs/jobs';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { MTableToolbar } from 'material-table';
import PageviewIcon from '@material-ui/icons/Pageview';

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

  //   async componentDidMount() {
  //     // GET request using axios with async/await

  //     const response = await axios.get('http://localhost:3500/jobs');
  //     this.setState({ data: response.data })
  //     console.log('response')
  //     console.log(response.data)
  // }

  componentDidMount() {
    // Simple GET request using axios
    // console.log("<4")

    if (this.props.jobId==4){
      console.log("=4")
      axios.get('http://localhost:3500/jobs')
      .then(response => this.setState({ data: response.data, dataAvail: true }));

    } else if (this.props.jobId===5) {
      console.log("=5");
      axios.get('http://localhost:3500/categories')
      .then(response => this.setState({ data: response.data, dataAvail: true }));
    } else {
      console.log("!4");
      console.log(jobs[this.props.jobId - 1].title)
      axios.get('http://localhost:3500/jobs/category/'+jobs[this.props.jobId - 1].value)
      .then(response => this.setState({ data: response.data, dataAvail: true }));
    }

    
  }

  render() {
    // console.log('ta entrando')
    // console.log(this.state.data)

    const dataAvail = this.state.dataAvail;
    let table;
    if (dataAvail) {
      table = <MaterialTable
        options={{ pageSize: parseInt(this.props.size), search: true ,actionsColumnIndex: -1}}
        columns={[
          { title: 'Location', field: 'location' },
          { title: 'Position', field: 'position' },
          { title: 'Category', field: 'category' }
        ]}

        data={this.state.data}
        actions={[
          {
            icon: PageviewIcon,
            tooltip: 'View Job',
            onClick: (event, rowData) => {
              let id = rowData._id
              window.location = "/jobdetail/"+id}
          }
        ]}

        title=''
        components={{
          Toolbar: props => (<div>
            <MTableToolbar {...props} />
            <div style={{ padding: '0px 10px' }}>
              <h5>
                {/* {console.log(this.props.jobId)} */}
                <Link to={'/jobs/' + this.props.jobId}>{jobs[this.props.jobId - 1].title}'s Table</Link>
              </h5>
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
