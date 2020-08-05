import React, { Component, useContext } from 'react';

import Postjob from '../postjob'
import Settings from '../settings'
import Logout from '../logout'
import Table from '../table'
import {TypeuserContext} from '../typeuser-context/typeuser-context'



import './home.css';

export const Home = props => {
    const [typeuserstate,setTypeuserstate] = useContext(TypeuserContext);
        let settings
        let poster
        
        // let typeofuser = this.context
        console.log('context')
        console.log(typeuserstate.type_of_user)
        console.log('props home')
        if (props.user.type_of_user&&typeuserstate.type_of_user==""){

            setTypeuserstate({type_of_user: props.user.type_of_user})
        }
        // console.log(props.user.type_of_user)
        // console.log(typeofuser)
        // typeofuser.setTypeofuser('user')
        
        // console.log(props)
        if(typeuserstate.type_of_user == "admin" ){//
            settings = <Settings />
        }
        if(typeuserstate.type_of_user == "poster" || typeuserstate.type_of_user == "admin" ){//
            poster = <Postjob />
        } 
        if(typeuserstate.type_of_user == "user"){
            settings = null;
            poster = null;
        }
        return (
            <div class="container">
                <div class="row float-right mr-2 buttons"> 
                    <Logout />
                   
                    {settings}
                </div>
                <h1 class="ml-5 pt-4 title"> Bolsa de Empleos "Tigre de Web"</h1>
                <hr />
                <div class="button row clearfix">
                    <div class="col-sm-2 ml-auto">
                        {poster}
                    </div>
                </div>
                <br />
                <Table jobId="4" size="20" />
            </div>

        );
    }