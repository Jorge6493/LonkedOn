import React, { Component,useContext } from 'react';
import './logout.css';
import { Link } from 'react-router-dom';
import {TypeuserContext} from '../typeuser-context/typeuser-context'

// function funciona (setTypeuserstate) {
//   setTypeuserstate({type_of_user: ""})
// }

class Logout extends Component {
  // const [typeuserstate,setTypeuserstate] = useContext(TypeuserContext);

  componentWillUnmount() {
    let value = this.context;
    console.log(value)
    // value[0].se
    value[0].type_of_user=""
    /* ... */
  }
  
  render(){    
    return (
      <div>
        <Link to="/">
          <span class="logout" >
            <i class="fas fa-sign-out-alt" ></i>
          </span>
          
        </Link>
      </div>
    );
  };
  
}

Logout.contextType = TypeuserContext;
export default Logout;
