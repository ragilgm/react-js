import React, { Component } from 'react';
import './style.css';
import swal from 'sweetalert';
// import { withRouter } from 'react-router';s
import Data from '../../data/Data';
import { RowInput,ButtonInput } from '../../components';

class LoginComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
         listKaryawan: [],
         username: "",
         password: ""
      }

   }

   componentDidMount() { 
      var data = this.props.data;
      console.log(this.props)
      this.setState({listKaryawan:data})
   }
   
   changeValue = (e) => { 
      this.setState({[e.target.name]:e.target.value})
   }


   loginHandler = (e) => {
      e.preventDefault();
      var admin = this.state.listKaryawan.some(data => data.username === this.state.username && data.password=== this.state.password && data.role==="admin")
      if (admin) {
         swal("login berhasil", {
            icon: "success",
         });
         this.props.goToHomePage()
         return;
      } 
      var user = this.state.listKaryawan.some(data => data.username === this.state.username && data.password === this.state.password && data.role === "user")
      if (user) { 

         swal("login berhasil", {
            icon: "success",
         });
         for (let i = 0; i < this.state.listKaryawan.length; i++) {
            if (this.state.listKaryawan[i].username === this.state.username) { 
               this.props.goToUserPage(this.state.listKaryawan[i].id);
               break;
            }
            
         }
         return;
      }
      
         swal("login gagal", {
            icon: "error",
         });
         return
      
      
    }


   render() {
      return (
         <div>
            <div className="container mt-5">
            
            <div className="card login-form col-lg-4 px-5 py-5">
               <h5 className="text-center mb-2 mt-3">Login Form</h5>
               <div className="form">
                     <div className="form-group mt-3">
                        
                  <RowInput labelInput="username" typeInput="text" nameInput="username" placeholderInput="enter usernmame" valueInput={this.state.username} onchangeValue={this.changeValue}/>
              
                  </div>
                  <div className="form-group">
                  <RowInput labelInput="password" typeInput="password" nameInput="password" placeholderInput="enter usernmame" valueInput={this.state.password} onchangeValue={this.changeValue}/>
                  </div>
                  <ButtonInput typeInput="button" valueInput="Login"
                     classNameValue="btn btn-success"
                        onClickValue={this.loginHandler}/>

               </div>
            </div>
               
            </div>     
         </div>
      );
   }
}

export default LoginComponent;



