import React, { Component } from 'react';
import './style.css'
import { RowInputLogin } from '../../components'
import swal from 'sweetalert'

class LoginPage extends Component {
   constructor(props) { 
      super(props)
      this.state = {
         defaultPassword: "user",
         password: "",
         username:"",
      }
   }

   async componentDidMount() { 
      console.log(this.props.data)

   }

   changeVaue = (e) => { 
      this.setState({[e.target.name]:e.target.value})
   }

   setPasswordHadler = () => { 
      this.props.setPasswordPage()
   }

   loginHander = () => { 
     var checkPassword = this.props.data.some(user => user.username === this.state.username && user.password===this.state.password);
      if (checkPassword) { 
         this.props.data.forEach(user => {
            if (user.username === this.state.username) { 
               this.props.homePage(user.id);
               return;
            }
         });
      }

      if (!checkPassword) { 
         swal("Something Whent Wrong", "", "error");
      }

      var checkUsername = this.props.data.some(user => user.username === this.state.username && user.password === "user" && this.state.password!=="user");
      if (checkUsername) {
            swal("Your Default Password is \"user\" ", "", "info");
            return;
         } 
  
         checkPassword = this.props.data.some(user => user.password === "user" && this.state.password === "user");
         if (checkPassword) { 
            swal("please set a password first ", "", "info");
            this.props.data.forEach(user => {
               if (user.username === this.state.username) { 
                  this.props.setPassword(user.id);
               }
            });
            
            return;
          } 
  
   }

   render() {
      return (
         <div>

            <video id="myVideo" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
               <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
            </video>
            
            <div className="limiter">
            <div className="container-login100">
               <div className="wrap-login100 p-t-30 p-b-50">
                  <span className="login100-form-title p-b-41">
                  Account Login
                  </span>
                  <form className="login100-form validate-form p-b-33 p-t-5" autoComplete="off">

                        <div className="wrap-input100 validate-input">
                           <RowInputLogin classInput="input100" typeInput="text" nameInput="username" placeholderInput="Username" valueInput={this.state.username} onChangeValue={this.changeVaue} />
                        </div>

                        <div className="wrap-input100 validate-input" >
                           <RowInputLogin classInput="input100" typeInput="password" nameInput="password" placeholderInput="Password" valueInput={this.state.password} onChangeValue={this.changeVaue} />
                        </div>

                        <div className="container-login100-form-btn m-t-32">
                           <RowInputLogin classInput="login100-form-btn" typeInput="button" valueInput="Login" onClickValue={this.loginHander}/>
                        </div>

                  </form>
               </div>
            </div>
            </div>
         </div>
      );
   }
}

export default LoginPage;