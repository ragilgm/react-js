import React, { Component } from 'react';
import './App.css';
import { LoginPage,HomePage ,HeaderPage, GaleryPage,SetPasswordPage} from './pages'

import axios from 'axios'


class App extends Component {
  constructor(props) { 
    super(props)
    this.state = {
      users: "",
      albums: "",
      photos:"",
      user: "",
      album: "",
      photo:"",
      page:""
    }
  }

  async componentDidMount() { 
    if (this.state.users.length === 0) {
      console.log("user is null")
      if (this.state.users === "") {
        await axios.get("https://jsonplaceholder.typicode.com/users")
          .then(res => {
            console.log(res.data)
            res.data.forEach(user => {
              user.password = "user"
            });
            this.setState({ users: res.data })
          })
        await axios.get("https://jsonplaceholder.typicode.com/albums")
          .then(res => {
            console.log(res.data)
            this.setState({ albums: res.data })
          });
        await axios.get("https://jsonplaceholder.typicode.com/photos")
          .then(res => {
            console.log(res.data)
            this.setState({ photos: res.data, page: "LOGIN" })
          });
      }
    } else { 
      console.log("user not null")
    }
      // this.setState({page:""})
  }

   routingHomePage = (id) => { 
    var intId = parseInt(id);
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].id === intId) { 
         this.setState({ user: this.state.users[i] })
        break;
      }
    }
    for (let i = 0; i < this.state.albums.length; i++) {
      if (this.state.albums[i].id === intId) { 
         this.setState({ album: this.state.albums[i] })
        break;
      }
    }

    var photo = [];

    for (let i = 0; i < this.state.photos.length; i++) {
      if (this.state.photos[i].albumId === intId) { 
        photo.push(this.state.photos[i])
      }
    }
    this.setState({ photo: photo })
    this.setState({page:"HOME"})
  }

  routingGaleryPage = () => {
    this.setState({page:"GALERY"})
  }
  routingLoginPage = () => {
    this.setState({page:"LOGIN"})
  }
  setPasswordPage = (id) => {
    var intId = parseInt(id);
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].id === intId) { 
         this.setState({ user: this.state.users[i] })
        break;
      }
    }
    for (let i = 0; i < this.state.albums.length; i++) {
      if (this.state.albums[i].id === intId) { 
         this.setState({ album: this.state.albums[i] })
        break;
      }
    }

    var photo = [];

    for (let i = 0; i < this.state.photos.length; i++) {
      if (this.state.photos[i].albumId === intId) { 
        photo.push(this.state.photos[i])
      }
    }
    this.setState({ photo: photo })
    this.setState({page:"SET-PASSWORD"})
  }

  setPasswordHadler = (newUser) => { 
    var updateUser = this.state.users;
    for (let i = 0; i < updateUser.length; i++) {
      if (updateUser[i].id === newUser.id) { 
        updateUser[i].password = newUser.password;
        break;
      }
    }

    console.log(newUser)
    console.log(this.state.users)

    this.setState({users:updateUser, page:"HOME"})

  }

  rowtingPages() { 
    switch (this.state.page) {
      case "LOGIN":
        return <LoginPage data={this.state.users} homePage={this.routingHomePage} setPassword={this.setPasswordPage}/>
      case "SET-PASSWORD":
        return <SetPasswordPage setPassword={this.setPasswordHadler} user={this.state.user}/>
        case "HOME":
        return (<><HeaderPage routingGalery={this.routingGaleryPage} loginPage={this.routingLoginPage} /> <HomePage user={this.state.user} album={this.state.album} photos={this.state.photo}/></>)
      case "GALERY":
        console.log("called")
        return (<><HeaderPage routingGalery={this.routingGaleryPage} homePage={this.routingHomePage} loginPage={this.routingLoginPage} />
          <GaleryPage photos={this.state.photo} /></>)
      
      default:
        break;
    }
  }

  render() {
    return (
      <>
        { this.rowtingPages()}
      </>
    );
  }
}

export default App;
