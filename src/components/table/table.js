import React, { Component } from 'react';
import MaterialTable from 'material-table'
import './table.css';
import Search from '../search';

class Table extends Component {
  
  render() {
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'Location', field: 'location' },
            { title: 'Position', field: 'position' },
            { title: 'Category', field: 'category' }
          ]}
          data={[{ location: 'Miami FL, USA', position: 'Design Freelancer', category: 'SAP' }]}
          
        />
      </div>
    );
  }
}

export default Table;
