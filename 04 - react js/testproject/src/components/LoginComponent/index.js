import React, { Component } from 'react';
import './style.css';
import swal from 'sweetalert';
import { withRouter } from 'react-router';
import Data from '../../data/Data';

class LoginComponents extends Component {
   constructor(props) {
      super(props);
      this.state = {
         listKaryawan: [],
         username: "",
         password: ""
      }

      this.chagePasswordHandler = this.chagePasswordHandler.bind(this);
      this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
      this.loginHandler = this.loginHandler.bind(this);

   }

   componentDidMount() { 
      var data = Data.listData();
      this.setState({listKaryawan:data})
   }
   
   chagePasswordHandler = (e) => { 
      this.setState({password:e.target.value})
   }

   changeUsernameHandler = (e) => { 
      this.setState({username:e.target.value})
   }

   loginHandler = (e) => {
      e.preventDefault();
      var admin = this.state.listKaryawan.some(data => data.username === this.state.username && data.password=== this.state.password && data.role==="admin")
      if (admin) {
         swal("login berhasil", {
            icon: "success",
         });
            this.props.history.push("/home")
         return;
      } 
      var user = this.state.listKaryawan.some(data => data.username === this.state.username && data.password === this.state.password && data.role === "user")
      if (user) { 

         swal("login berhasil", {
            icon: "success",
         });
         var data = Data.findByUsername(this.state.username);

         this.props.history.push("/home-user/" + data.id);
         return;
      }
      
      if(!user && !admin) { 
         swal("login gagal", {
            icon: "error",
         });
         return
      }
      
    }


   render() {
      return (
         <div>
            <div className="container mt-5">
            
            <div className="card login-form col-lg-4 px-5 py-5">
               <h5 className="text-center mb-2 mt-3">Login Form</h5>
               <div className="form">
                  <div className="form-group mt-3">
                     <label htmlFor="username">Username :</label>
                        <input type="text" id="username" placeholder="please enter username" className="form-control" value={this.state.username} onChange={this.changeUsernameHandler}/>
              
                  </div>
                  <div className="form-group">
                     <label htmlFor="password">password :</label>
                        <input type="password" id="password" placeholder="please enter password" className="form-control" value={this.state.password} onChange={this.chagePasswordHandler}/>
                  </div>

                  <button className="btn btn-sm btn-success" onClick={this.loginHandler}>Login</button>
               </div>
            </div>
               
            </div>     
         </div>
      );
   }
}

export default withRouter(LoginComponents);



