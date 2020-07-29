import React from "react";
import "./casodeUso2.component.css";

export default class CdU2 extends React.Component {
    render() {
        return (
            <>
                <div class="container">
                    <h2>Programmer</h2>
                    <table class="table table-striped table-bordered table-sm">
                        <thead>
                            <tr>
                                <th class="col-sm-5" scope="col">Location</th>
                                <th class="col-sm-3" scope="col">Position</th>
                                <th class="col-sm-4" scope="col">Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Miami<br/>Florida U.S.A.</td>
                                <td>Design Freelancer</td>
                                <td>Craigmann Asoc.</td>
                            </tr>
                            <tr>
                                <td>Milan<br/>Italy</td>
                                <td>Design Architect</td>
                                <td>Pablo GmbH</td>
                            </tr>
                            <tr>
                                <td>Santo Domingo<br/>Dominican Republic</td>
                                <td>Design Freelancer</td>
                                <td>SAP</td>
                            </tr>
                        </tbody>
                    </table>
                    <nav>
                        <ul class="pagination justify-content-center">
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                              <span class="sr-only">Previous</span>
                            </a>
                          </li>
                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                              <span class="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                    </nav>
                </div>
            </>
        );
    }
}