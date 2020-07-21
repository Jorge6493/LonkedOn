import React, { Component } from 'react';
import MaterialTable from 'material-table'
import './table.css';

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
          title="Design"
        />
      </div>
    );
  }
}

export default Table;
