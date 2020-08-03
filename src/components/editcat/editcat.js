import React from 'react';
import Logout from '../logout';
import Settings from '../settings';
import HomeButton from '../homebutton/homebutton';
import Postjob from '../postjob';
import AddCategory from '../addcat/addcat';
import Table from '../table';

export default class EditCategory extends React.Component {
    render() {
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
                    <h3>All Categories</h3>
                    <div class="input-group col-sm-2 ml-auto mr-4">
                        <AddCategory />
                    </div>
                </div>
                <div class="container">
                    <Table jobId="5" size="10" />
                </div>
            </div>
        )
    }
}