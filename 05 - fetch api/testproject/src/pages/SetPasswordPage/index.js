import React, { Component } from 'react';
import './style.css'
import { RowInputLogin } from '../../components'
import swal from 'sweetalert'

class SetPasswordPage extends Component {
   constructor(props) { 
      super(props)
      this.state = {
         user: "",
         password:"",
      }
   }

   async componentDidMount() { 
      console.log(this.props.user)
      this.setState({user:this.props.user})
   }

   changeVaue = (e) => { 
      this.setState({[e.target.name]:e.target.value})
   }

   updatePasswordHandler = () => { 
      var user = this.state.user;
      user.password = this.state.password
      this.props.setPassword(user)
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
                        Set Password
                  </span>
                  <form className="login100-form validate-form p-b-33 p-t-5" autoComplete="off">

                        <div className="wrap-input100 validate-input" >
                           <RowInputLogin classInput="input100" typeInput="password" nameInput="password" placeholderInput="Password" valueInput={this.state.password} onChangeValue={this.changeVaue} />
                        </div>

                        <div className="container-login100-form-btn m-t-32">
                           <RowInputLogin classInput="login100-form-btn" typeInput="button" valueInput="Update Password" onClickValue={this.updatePasswordHandler}/>
                        </div>

                  </form>
               </div>
            </div>
            </div>
         </div>
      );
   }
}

export default SetPasswordPage;