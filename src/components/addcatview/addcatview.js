import React from 'react';
import axios from 'axios';

export default class AddCatView extends React.Component {
    state = {
        category: ""
    };

    handleChange = (event, fieldName) => {
        this.setState({ [fieldName]: event.target.value });
    }

    postCategory = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3500/categories", {
            category: this.state.category
        }).then(() => {
            alert("Categoria posteada con exito!");
            this.setState({ "category": "" });
        }

        );
    };

    render() {
        return (
            <div class="container">
                <h1 class="ml-5 pt-4">Bolsa de Empleos "Tigre de Web"</h1>
                <hr />
                <br />
                <div class="form-group center">
                    <label for="categoryName">Category Name</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter new category"
                        id="position"
                        value={this.state.category}
                        onChange={(event) => this.handleChange(event, "category")}
                        required
                    />
                    <button type="submit" class="btn btn-secondary" onClick={this.postCategory}> Add Category </button>

                </div>
            </div>
        )
    }
}