import React, { useState, createContext } from 'react';


export const TypeuserContext = createContext();

export const TypeuserProvider = props => {

  const [typeuserstate,setTypeuserstate] = useState(
    {
      type_of_user: ""
    }
  );

  return(
    <TypeuserContext.Provider value={[typeuserstate,setTypeuserstate]} >
      {props.children}
    </TypeuserContext.Provider>
  );
}