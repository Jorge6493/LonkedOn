import React, { Component } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import './table.css';
// import Search from '../search';
// import Jobs from '../jobs/jobs';
import { Link } from 'react-router-dom';
import { data } from 'jquery';
// import { MTableToolbar } from 'material-table';

const jobs = [
  {
    title: `Design`,
  },
  {
    title: `Programming`,
  },
  {
    title: `QA Engineer`,
  },
];

class Table extends Component {
  state = {
    loading: true,
    data: {}
  }

  async componentDidMount() {
    // console.log('hola')
    // const url = "http://localhost:3500/jobs";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({data: data, loading: false});
    // console.log(this.state.data);
    // console.log(response)
    // console.log(data[0].category)

  }
  
  render() {
    // console.log('ta entrando')
    // console.log(this.state.data)
    
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
        options={{pageSize:this.props.size}}
          columns={[
            { title: 'Location', field: 'location' },
            { title: 'Position', field: 'position' },
            { title: 'Category', field: 'category' }
          ]}

          data={query =>
            new Promise((resolve, reject) => {
              let url = 'http://localhost:3500/jobs'
              
              fetch(url)
                .then(response => response.json())
                .then(result => {
                  resolve(
                    
                    {
                    data: result,
                    page: 1,
                    totalCount: result.total
                  },
                  console.log(result)
                  )
                })
            })
          }
          
        //  data={[
        //     { location: this.state.data.location, position: this.state.data.position, category: this.state.data.category },
        //        {location: 'Santo Domingo, RD', position: 'Design Freelancer', category: 'GBM'}]}
          title=''
          components={{
            Toolbar: props => (<div>
              <MTableToolbar {...props} />
                <div style={{padding: '0px 10px'}}>
                <h5>
                    <Link to={'/jobs/'+ this.props.jobId }>{jobs[this.props.jobId-1].title}'s Table</Link>
                    </h5>
                </div>
            </div>
           
            )
        }}
           //title={this.props.name}
        />
      </div>
    );
  }
}

export default Table;
