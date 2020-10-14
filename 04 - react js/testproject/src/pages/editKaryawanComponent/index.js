import React, { Component } from 'react';
import Data from '../../data/Data';
import swal from 'sweetalert';
import { RowInput, RowTextArea ,RowRadioInput, ButtonInput} from '../../components';

class EditKaryawanComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
         id: "",
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
   componentDidMount = async () => {
      var data = this.props.data;
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
      await console.log(data.position)
   }

   componentDidUpdate() { 
      document.getElementById(this.state.gender).checked = "true";
      document.getElementById(this.state.status).checked = "true";
      document.getElementById(this.state.position).checked = "true";
   }
   


   changeValue = (e) => { 
      // if (e.target.checked == true) {
      //    this.setState({
      //       [e.target.name]: e.target.value
      //    });
      // } else { 
         this.setState({
            [e.target.name]: e.target.value
         });
      // }
   }

   editKaryawanHandler = (e) => { 
      e.preventDefault();

      var data = {
         id:this.state.id,
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
      swal("data berhasil di simpan", {
         icon: "success",
       });
      this.props.saveEdit(data);

   }

   cancelHandler = () => { 
      this.props.goToHomePage();
   }

   render() {
      return (
         <div className="mt-5">
         <div className="col-lg-10 ml-5 ml-5 card add-from px-5 py-2">

            <h3 className="text-center ">Add Karyawan</h3>
            <div className="row mt-3">
               <div className="form-group mr-3 col-lg-5 ml-5">

                  <RowInput labelInput="username" typeInput="text" nameInput="username" placeholderInput="enter username" valueInput={this.state.username} onchangeValue={this.changeValue}/>
            </div>
            <div className="form-group mr-3 col-lg-5">
              
                <RowInput labelInput="password" typeInput="password" nameInput="password" placeholderInput="enter password" valueInput={this.state.password} onchangeValue={this.changeValue}/>
            </div>
            <div className="form-group mr-3 col-lg-5 ml-5">
               
               <RowInput labelInput="fullname" typeInput="text" nameInput="fullname" placeholderInput="enter fullname" valueInput={this.state.fullname} onchangeValue={this.changeValue}/>
            </div>
            <div className="form-group mr-3 col-lg-5">
               <label htmlFor="dateOfBirth">Date Of Birth</label>
               <RowInput labelInput="dateOfBirth" typeInput="date" nameInput="dateOfBirth" placeholderInput="enter dateOfBirth" valueInput={this.state.dateOfBirth} onchangeValue={this.changeValue}/>
            </div>
            <div className="form-group mr-3 col-lg-5 ml-5">
                  <label htmlFor="gender">Gender</label>
                  <br/>
                     <RowRadioInput typeInput="radio" idInput="laki-laki" nameInput="gender" valueInput="laki-laki" 
                     onchangeValue={this.changeValue} />
                  
                  <RowRadioInput typeInput="radio" idInput="perempuan" nameInput="gender" valueInput="perempuan" 
                  onchangeValue={this.changeValue}/>
                    
                  
            </div>
               <div className="form-group mr-3 col-lg-5">
               <label htmlFor="gender">Status</label>
                  <br/>
            <RowRadioInput typeInput="radio" nameInput="status" idInput="menikah"  valueInput="menikah" onchangeValue={this.changeValue} />
                  
                  <RowRadioInput typeInput="radio" nameInput="status" idInput="lajang"  valueInput="lajang" onchangeValue={this.changeValue} />
                  
                  <RowRadioInput typeInput="radio" nameInput="status" idInput="duda"  valueInput="duda" onchangeValue={this.changeValue} />
            </div>
            <div className="form-group mr-3 col-lg-5 ml-5">
            <RowTextArea labelInput="address"  nameInput="address" placeholderInput="enter address" valueInput={this.state.address} onchangeValue={this.changeValue}/>
               
            </div>
               <div className="form-group mr-3 col-lg-5">

                  <RowInput labelInput="contact" typeInput="number" nameInput="contact" placeholderInput="enter contact" valueInput={this.state.contact} onchangeValue={this.changeValue}/>
            </div>
            <div className="form-group mr-3 col-lg-5 ml-5">
                   <RowInput labelInput="email" typeInput="email" nameInput="email" placeholderInput="enter email" valueInput={this.state.email} onchangeValue={this.changeValue}/>
               
            </div>
               <div className="form-group mr-3 col-lg-5">
                  <label htmlFor="position">position</label>
                  <br/>
                  
                  <RowRadioInput typeInput="radio" nameInput="position" idInput="frontend" valueInput="frontend" onchangeValue={this.changeValue} />

                  <RowRadioInput typeInput="radio" nameInput="position" idInput="backend" valueInput="backend" onchangeValue={this.changeValue} />

                  <RowRadioInput typeInput="radio" nameInput="position" idInput="admin" valueInput="admin" onchangeValue={this.changeValue} />
               </div>

            <div className="col-lg-12 text-center mt-3 mb-5">
                  <ButtonInput typeInput="button" valueInput="Submit" classNameValue="btn btn-sm btn-primary col-lg-2"
                     onClickValue={this.editKaryawanHandler}
                  />
                  <ButtonInput typeInput="button" valueInput="cancel"
                  classNameValue="btn btn-sm btn-danger col-lg-2 ml-2"
                     onClickValue={this.cancelHandler}
                  />
            </div>

            </div>


         </div>
      </div>
      );
   }
}

export default EditKaryawanComponent;