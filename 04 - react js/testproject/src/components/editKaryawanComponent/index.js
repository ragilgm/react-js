import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Data from '../../data/Data';
import swal from 'sweetalert';

class EditKaryawanComponen extends Component {
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

   componentDidUpdate() { 
      document.getElementById(this.state.gender).checked = true;
      document.getElementById(this.state.status).checked = true;
      document.getElementById(this.state.position).checked = true;
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

   editKaryawanHandler = (e) => { 
      e.preventDefault();

      var data = {
         username: this.state.username,
         password: this.state.password,
         fullname: this.state.fullname,
         dateOfBirth: this.state.dateOfBirth,
         gender: this.state.gender,
         status: this.state.status,
         address: this.state.address,
         contact: this.state.contact,
         email: this.state.email,
         position: this.state.position,
         role: this.state.role,
      }
      Data.updateKaryawan(this.state.id, data)
      swal("data berhasil di simpan", {
         icon: "success",
       });
      this.props.history.push("/home");

   }

   cancelHandler = () => { 
      this.props.history.push("/home");
   }

   render() {
      console.log(this.state.username)
      return (
         <div className="mt-5">
            <div className="col-lg-10 ml-5 ml-5 card add-from px-5 py-2">

               <h3 className="text-center ">Edit Karyawan</h3>
               <div className="row mt-3">
               <div className="form-group mr-3 col-lg-5 ml-5">
                  <label htmlFor="username">username</label>
                     <input type="text" className="form-control" id="username" placeholder="Enter username"
                        value={this.state.username} onChange={this.changeUsernameHandler} disabled
                     />
               </div>
               <div className="form-group mr-3 col-lg-5">
                  <label htmlFor="password">password</label>
                     <input type="password" className="form-control" id="password" placeholder="Enter password"
                        value={this.state.password} onChange={this.changePasswordHandler}
                     />
               </div>
               <div className="form-group mr-3 col-lg-5 ml-5">
                  <label htmlFor="fullname">fullname</label>
                     <input type="text" className="form-control" id="fullname" placeholder="Enter fullname"
                     value={this.state.fullname} onChange={this.changeFullnameHandler}
                     />
               </div>
               <div className="form-group mr-3 col-lg-5">
                  <label htmlFor="date-of-bith">Date Of Birth</label>
                     <input type="date" className="form-control" id="date-of-bith" placeholder="Enter date-of-bith"
                     value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler}
                     />
               </div>
               <div className="form-group mr-3 col-lg-5 ml-5">
                     <label htmlFor="gender">Gender</label>
                     <br/>
                     <input type="radio" name="gender" id="laki-laki" value="laki-laki" className="mr-2"
                        onChange={this.changeGenderHandler}
                     />
                        Laki-Laki
                     <input type="radio" name="gender" id="perempuan" value="perempuan" className="ml-3 mr-2"
                     onChange={this.changeGenderHandler}
                     />
                        Perempuan
               </div>
               <div className="form-group mr-3 col-lg-5">
                  <label htmlFor="status">Status</label>
                  <br/>
                     <input type="radio" name="status" id="lajang" value="lajang" className="mr-2"
                     onChange={this.changeStatusHandler}
                     />
                        lajang
                  <input type="radio" name="status" id="menikah" value="menikah" className="ml-3 mr-2"
                        onChange={this.changeStatusHandler}
                     />
                        menikah
                  <input type="radio" name="status" id="duda" value="duda" className="ml-3 mr-2"
                        onChange={this.changeStatusHandler}
                     />
                        duda
               </div>
               <div className="form-group mr-3 col-lg-5 ml-5">
                     <label htmlFor="address">Address</label>
                     <br/>
                     <textarea type="textarea" className="form-control" id="Address" placeholder="Enter Address"
                     value={this.state.address} onChange={this.changeAddressHandler}
                     />
                  
               </div>
                  <div className="form-group mr-3 col-lg-5">
                  <label htmlFor="contact">Contact</label>
                     <input type="number" className="form-control" id="contact" placeholder="Enter contact"
                     value={this.state.contact} onChange={this.changeContactHandler}
                     />
               </div>
               <div className="form-group mr-3 col-lg-5 ml-5">
                     <label htmlFor="email">email</label>
                     <br/>
                     <input type="email" className="form-control" id="email" placeholder="Enter email"
                        value={this.state.email} onChange={this.changeEmailHandler}
                     />
                  
               </div>
                  <div className="form-group mr-3 col-lg-5">
                     <label htmlFor="position">position</label>
                     <br/>
                     <input type="radio" name="position" id="frontend" value="frontend" className="mr-2"
                      onChange={this.changePositionHandler}
                     />
                        frontend
                  <input type="radio" name="position" id="backend" value="backend" className="ml-3 mr-2"
                     onChange={this.changePositionHandler}
                     />
                        backend
                  <input type="radio" name="position" id="admin" value="admin" className="ml-3 mr-2"
                     onChange={this.changePositionHandler}
                     />
                        admin
                  </div>

               <div className="col-lg-12 text-center mt-3 mb-5">
                     <input type="button" className="btn btn-sm btn-primary col-lg-2" value="Edit"
                        onClick={this.editKaryawanHandler}
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

export default withRouter(EditKaryawanComponen);