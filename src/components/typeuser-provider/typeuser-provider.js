import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();




class TypeuserContextProvider extends Component {
  state = {
    typeofuser: "admin"
  };

  setTypeofuser(usertype) {
    console.log("settypeofuser accessed")
    console.log(usertype)
    this.setState(
        {typeofuser: usertype}
      
    );
  };

  

  render() {
    console.log('context accessed')
    return(
      <Provider
      value={{ typeofuser: this.state.typeofuser }}
    >
      {this.props.children}
    </Provider>
       );
  }
}

export { TypeuserContextProvider, Consumer as TypeuserContextConsumer };
