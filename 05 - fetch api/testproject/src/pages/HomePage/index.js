import React, { Component } from 'react';
import './style.css'

class HomePage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user: "",
         address: "",
         company:"",
         album: "",
         photo:""
      }
   }

    async componentDidMount() { 
       await this.setState({ user: this.props.user, album: this.props.album, photo: this.props.photos })
       await this.setState({ address: this.state.user.address, company: this.state.user.company })
       for (let i = 0; i < this.props.photos.length; i++) {
          console.log(this.props.photos[i])
          
       }
   

   }

   render() {
   
      return (
         <div className="container">
            <section id="team" className="pb-5">
               <div className="container">
                  <h5 className="section-title h1">MY PROFILE</h5>
                  <div className="row">
               
                        <div className="col-xs-12 col-sm-6 col-md-4 profile">
                           <div className="image-flip">
                              <div className="mainflip">
                                    <div className="frontside">
                                       <div className="card">
                                          <div className="card-body text-center">
                                       <p><img className=" img-fluid" src={this.props.photos[0].url} alt="card image" /></p>
                                       <h4 className="card-title">{this.state.user.name}</h4>
                                                <p className="card-text">
                                          Addrress : {this.state.address.street} {this.state.address.suite} <br />
                                          
                                                   Email : {this.state.user.email}<br/>
                                                   Contact : {this.state.user.phone}<br/>
                                                   Website : {this.state.user.website}
                                                </p>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="backside">
                                       <div className="card">
                                          <div className="card-body text-center mt-4">
                                                <h4 className="card-title">About</h4>
                                                <p className="card-text">
                                          Company : {this.state.company.name}<br/>
                                          Catch Phrase : {this.state.company.catchPhrase}<br/>
                                          BS : {this.state.company.bs}<br/>
                                          
                                       </p>
                                             
                                          </div>
                                       </div>
                                    </div>
                              </div>
                           </div>
                        </div>
                  
                        

                  </div>
               </div>
            </section>
         </div>
         
      );
   }
   }

export default HomePage;