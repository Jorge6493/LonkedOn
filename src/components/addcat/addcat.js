import React from 'react';
import { Link } from 'react-router-dom';


export default class AddCategory extends React.Component {
  render() {
    return (
      <div id="AddCatButton">
        <Link to="/">
          <button type="button" id="homebtn-btn" class="btn btn-primary">Add Category</button>
        </Link>
      </div>
    );
  }
}
