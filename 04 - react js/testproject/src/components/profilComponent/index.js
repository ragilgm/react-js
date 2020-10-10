import React, { Component } from 'react';
import Data from '../../data/Data';
import { withRouter } from 'react-router';

class ProfilComponent extends Component {
   
   constructor(props) {
      super(props);
      this.state = {
         id: this.props.match.params.id,
         username: "",
         password: "",
         fullname: "",
         dateOfBirth: "",
         gender: "",
         status: "",
         address: "",
         contact: "",
         email: "",
         position: "",
         role: "",
      }
   }

   componentDidMount() { 
      var data = Data.findById(this.state.id);
      this.setState({ id: data.id })
      this.setState({ username: data.username })
      this.setState({ password: data.password })
      this.setState({ fullname: data.fullname })
      this.setState({ dateOfBirth: data.dateOfBirth })
      this.setState({ gender: data.gender })
      this.setState({ status: data.status })
      this.setState({ address: data.address })
      this.setState({ contact: data.contact })
      this.setState({ email: data.email })
      this.setState({ position: data.position })
      this.setState({ role: data.role })
   }

   backHandler = () => { 
      this.props.history.push("/login");
   }
   render() {
      return (
         <div>
             
             <div>
                <div className="d-flex justify-content-end col-lg-6">
               <div className="p-2">
               <button className="btn btn-sm btn-primary add-karyawan mt-5  align-items-end flex-column" onClick={this.backHandler}><i className="fas fa-sign-out-alt"></i></button>
               </div>
            </div>

            <div class="card text-white bg-secondary mb-3 col-lg-4 " >
            <div class="card-header">Detail Karyawan</div>
            <div class="card-body">
               <h5 class="card-title">{this.state.fullname}</h5>
                  <p>Fullname : {this.state.username}</p>
                  <p>Password : {this.state.password}</p>
                  <p>dateOfBirth : {this.state.dateOfBirth}</p>
                  <p>gender : {this.state.gender}</p>
                  <p>status : {this.state.status}</p>
                  <p>address : {this.state.address}</p>
                  <p>contact : {this.state.contact}</p>
                  <p>email : {this.state.email}</p>
                  <p>position : {this.state.position}</p>
                  <p>role : {this.state.role}</p>   
            </div>
            </div>
            
           </div>
            
         </div>
      );
   }
}

export default withRouter(ProfilComponent);