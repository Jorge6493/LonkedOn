import React, { Component } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import './table.css';
// import Search from '../search';
// import Jobs from '../jobs/jobs';
import { Link } from 'react-router-dom';
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
  
  
  render() {
    // console.log(this.props.jobId-1)
    
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
        options={{pageSize:this.props.size}}
          columns={[
            { title: 'Location', field: 'location' },
            { title: 'Position', field: 'position' },
            { title: 'Category', field: 'category' }
          ]}
          data={[{ location: 'Miami FL, USA', position: 'Design Freelancer', category: 'SAP' }]}
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
