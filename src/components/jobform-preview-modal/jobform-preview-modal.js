import React, { Component } from 'react';
import './jobform-preview-modal.css';

// const Modal = ({ handleClose, show, children }) => {
//   const showHideClassName = show ? "modal display-block" : "modal display-none";

//   return (
//     <div className={showHideClassName}>
//       <section className="modal-main">
//         {children}
//         <button onClick={handleClose}>close</button>
//       </section>
//     </div>
//   );
// };

class JobformPreviewModal extends Component {
  

  state = {
    loading: true,
    data: {},
    dataAvail: null
  }

 

  render() {

    // console.log("in modal")
    // console.log(this.props.data)
        
    // const dataAvail = this.state.dataAvail;
    // // let info;
    // if (dataAvail){
    //     console.log(this.state.data)
        
    // }
    return (
        <div class="container">
            <br/>
            <div class="row">
            <div class="col-sm-9">
    <h3>{this.props.data.company}</h3>
    <h5>{this.props.data.location}</h5>
    <hr/>
    <h5>{this.props.data.position}</h5>
    <hr/>
    <p>{this.props.data.description}</p>
    <br/>
    <h5>How to apply</h5>
    <br/>
    <p>Send your resume at {this.props.data.email}</p>
    <p>{this.props.data.url}</p>
</div>
<div class="col">
    <img alt='' src={"/images/"+this.props.data.logo}></img>
</div>
            </div>
        </div>            
    );
}
}

export default JobformPreviewModal;
