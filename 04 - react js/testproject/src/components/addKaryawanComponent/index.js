import React, { Component } from 'react';
import Data from '../../data/Data';
import './style.css'
import { withRouter } from 'react-router';
import swal from 'sweetalert';

class AddKaryawanComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
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
   changeUsernameHandler = (e) => { 
      this.setState({username:e.target.value})
   }
   changePasswordHandler = (e) => { 
      this.setState({password:e.target.value})
   }
   changeFullnameHandler = (e) => { 
      this.setState({fullname:e.target.value})
   }
   changeDateOfBirthHandler = (e) => { 
      this.setState({dateOfBirth:e.target.value})
   }
   changeGenderHandler = (e) => { 
      this.setState({gender:e.target.value})
   }
   changeUsernameHandler = (e) => { 
      this.setState({username:e.target.value})
   }

   changeStatusHandler = (e) => { 
      this.setState({status:e.target.value})
   }

   changeAddressHandler = (e) => { 
      this.setState({address:e.target.value})
   }

   changeContactHandler = (e) => { 
      this.setState({contact:e.target.value})
   }

   changeEmailHandler = (e) => { 
      this.setState({email:e.target.value})
   }

   changePositionHandler = (e) => { 
      this.setState({position:e.target.value})
   }


   changeValue = (e) => { 
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   addKaryawanHandler = (e) => { 
      e.preventDefault();
      var data = {
         username:this.state.username,
         password:this.state.password,
         fullname:this.state.fullname,
         dateOfBirth:this.state.dateOfBirth,
         gender:this.state.gender,
         status:this.state.status,
         address:this.state.address,
         contact:this.state.contact,
         email:this.state.email,
         position:this.state.position,
         role:this.state.role
      }

      var res = Data.addKaryawan(data);
      if (res === 0) {
         swal("username sudah tersedia, silahkan gunakan username yang lain", {
            icon: "error",
         });
      } else { 
         swal("data berhasil di simpan", {
            icon: "success",
         });
         this.props.history.push("/home");
      }
   }

   cancelHandler = () => { 
      this.props.history.push("/home");
   }

   render() {
      return (
         <div className="mt-5">
            <div className="col-lg-10 ml-5 ml-5 card add-from px-5 py-2">

               <h3 className="text-center ">Add Karyawan</h3>
               <div className="row mt-3">
               <div className="form-group mr-3 col-lg-5 ml-5">
                  <label htmlFor="username">username</label>
                     <input type="text" className="form-control" name="username" placeholder="Enter username"
                        value={this.state.username} onChange={this.changeValue}
                     />
               </div>
               <div className="form-group mr-3 col-lg-5">
                  <label htmlFor="password">password</label>
                     <input type="password" className="form-control" name="password" placeholder="Enter password"
                        value={this.state.password} onChange={this.changeValue}
                     />
               </div>
               <div className="form-group mr-3 col-lg-5 ml-5">
                  <label htmlFor="fullname">fullname</label>
                     <input type="text" className="form-control" name="fullname" placeholder="Enter fullname"
                     value={this.state.fullname} onChange={this.changeValue}
                     />
               </div>
               <div className="form-group mr-3 col-lg-5">
                  <label htmlFor="date-of-bith">Date Of Birth</label>
                     <input type="date" className="form-control" name="date-of-bith" placeholder="Enter date-of-bith"
                     value={this.state.dateOfBirth} onChange={this.changeValue}
                     />
               </div>
               <div className="form-group mr-3 col-lg-5 ml-5">
                     <label htmlFor="gender">Gender</label>
                     <br/>
                     <input type="radio" name="gender" name="laki-laki" value="laki-laki" className="mr-2"
                        onChange={this.changeValue}
                     />
                        Laki-Laki
                     <input type="radio" name="gender" name="perempuan" value="perempuan" className="ml-3 mr-2"
                     onChange={this.changeValue}
                     />
                        Perempuan
               </div>
               <div className="form-group mr-3 col-lg-5">
                  <label htmlFor="status">Status</label>
                  <br/>
                     <input type="radio" name="status" name="lajang" value="lajang" className="mr-2"
                     onChange={this.changeValue}
                     />
                        lajang
                  <input type="radio" name="status" name="menikah" value="menikah" className="ml-3 mr-2"
                        onChange={this.changeValue}
                     />
                        menikah
                  <input type="radio" name="status" name="duda" value="duda" className="ml-3 mr-2"
                        onChange={this.changeValue}
                     />
                        duda
               </div>
               <div className="form-group mr-3 col-lg-5 ml-5">
                     <label htmlFor="address">Address</label>
                     <br/>
                     <textarea type="textarea" className="form-control" name="Address" placeholder="Enter Address"
                     value={this.state.address} onChange={this.changeValue}
                     />
                  
               </div>
                  <div className="form-group mr-3 col-lg-5">
                  <label htmlFor="contact">Contact</label>
                     <input type="number" className="form-control" name="contact" placeholder="Enter contact"
                     value={this.state.contact} onChange={this.changeValue}
                     />
               </div>
               <div className="form-group mr-3 col-lg-5 ml-5">
                     <label htmlFor="email">email</label>
                     <br/>
                     <input type="email" className="form-control" name="email" placeholder="Enter email"
                        value={this.state.email} onChange={this.changeValue}
                     />
                  
               </div>
                  <div className="form-group mr-3 col-lg-5">
                     <label htmlFor="position">position</label>
                     <br/>
                     <input type="radio" name="position" name="frontend" value="frontend" className="mr-2"
                      onChange={this.changeValue}
                     />
                        frontend
                  <input type="radio" name="position" name="backend" value="backend" className="ml-3 mr-2"
                     onChange={this.changeValue}
                     />
                        backend
                  <input type="radio" name="position" name="admin" value="admin" className="ml-3 mr-2"
                     onChange={this.changeValue}
                     />
                        admin
                  </div>

               <div className="col-lg-12 text-center mt-3 mb-5">
                     <input type="button" className="btn btn-sm btn-primary col-lg-2" value="Submit"
                        onClick={this.addKaryawanHandler}
                     />
                     <input type="button" className="btn btn-sm btn-danger col-lg-2 ml-5" value="Cancel"
                     onClick={this.cancelHandler}
                     />
               </div>

               </div>


            </div>
         </div>
      );
   }
}

export default withRouter(AddKaryawanComponent);