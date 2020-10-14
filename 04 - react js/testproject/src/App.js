import React, { Component } from 'react';
import './App.css';
import swal from 'sweetalert';
// import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { LoginComponent,HomeComponent, UserComponent, AddKaryawanComponent, ProfilComponent,EditKaryawanComponent } from './pages'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: true,
      page: "LOGIN",
      id: null,
      listKaryawan: [
        {
           "id": 1,
           "username": "ragil",
           "password": "ragil",
           "fullname": "ragil",
           "dateOfBirth": "2020-10-23",
           "gender": "laki-laki",
           "status": "lajang",
           "address": "jakarta",
           "contact": "08161309852",
           "email": "ragil@gmail.com",
           "position": "admin",
           "role": "admin",
        },
        {
           "id": 2,
           "username": "reza",
           "password": "reza",
           "fullname": "reza",
           "dateOfBirth": "2020-10-23",
           "gender": "laki-laki",
           "status": "lajang",
           "address": "jakarta",
           "contact": "08161309852",
           "email": "ragil@gmail.com",
           "position": "backend",
           "role": "user",
        },
     ]
    }
  }


  homePage = () => { 
    this.setState({page:"HOME"})
  }
  homePageParam = (karyawan) => { 
    console.log(karyawan)
    var checkUsername = this.state.listKaryawan.some(data => data.username === karyawan.username);
    if (checkUsername) { 
      swal("username sudah tersedia, silahkan gunakan username yang lain", {
        icon: "error",
     });
      return;
    }

    karyawan.id = this.state.listKaryawan.length + 1;
    if (karyawan.position === "admin") {
       karyawan.role = "admin";
    } else { 
       karyawan.role = "user";
    }
    console.log(karyawan)
    var data = this.state.listKaryawan
    data.push(karyawan)
    console.log(data)
    this.setState({ listKaryawan: data });
    swal("data berhasil di simpan", {
      icon: "success",
   });
    this.setState({ page: "HOME" })
  }
  saveEdit = (data) => { 
    console.log(data)
    var intId = parseInt(data.id);
    if (data.position === "admin") {
       data.role = "admin";
    } else { 
       data.role = "user";
    }
    for (let i = 0; i < this.state.listKaryawan.length; i++) {
      if (this.state.listKaryawan[i].id === intId) { 
         console.log("called")
          this.state.listKaryawan[i].username = data.username;
          this.state.listKaryawan[i].password = data.password;
          this.state.listKaryawan[i].fullname = data.fullname;
          this.state.listKaryawan[i].dateOfBirth = data.dateOfBirth;
          this.state.listKaryawan[i].gender = data.gender;
          this.state.listKaryawan[i].status = data.status;
          this.state.listKaryawan[i].address = data.address;
          this.state.listKaryawan[i].contact = data.contact;
          this.state.listKaryawan[i].email = data.email;
          this.state.listKaryawan[i].position = data.position;
         this.state.listKaryawan[i].role = data.role;
         break;
       }
       
    }
    swal("data berhasil di simpan", {
      icon: "success",
   });
    this.setState({ page: "HOME" })
  }
  
  addKaryawanPage = () => { 
    this.setState({page:"ADD-KARYAWAN"})
  }
  editKaryawanPage = (id) => { 
    this.setState({ page: "EDIT-KARYAWAN" })
    this.setState({id:id})
  }
  deleteKaryawanPage = (id) => { 
    var array = this.state.listKaryawan;
    var intId = parseInt(id);
    for (let i = 0; i < array.length; i++) {
       if (this.state.listKaryawan[i].id === intId) {
          array.splice(i, 1);
           this.setState({listKaryawan: array});
       }
       
    }
    this.setState({ page: "HOME" })

  }
  detailKaryawanPage = (id) => { 
    console.log(id)
    this.setState({page:"DETAIL-KARYAWAN", id:id})

  }
  logoutKaryawanPage = () => { 
    this.setState({page:"LOGOUT"})
  }
  loginPage = () => { 
    this.setState({page:"LOGIN"})
  }
  userHomePage = (id) => { 
    console.log(id)
    console.log("called")
    this.setState({id:id})
    this.setState({page:"USER-HOME"})
  }


  showPage = () => { 
    switch (this.state.page) {
      case "LOGIN":
        return <LoginComponent goToHomePage={this.homePage} goToUserPage={this.userHomePage} data={this.state.listKaryawan} loginUser={this.detailKaryawanPage}/>
        break;
      case "HOME":
        return <HomeComponent goToProfilePage={this.detailKaryawanPage} data={this.state.listKaryawan}
          goToAddPage={this.addKaryawanPage} goToEditPage={this.editKaryawanPage} goToLoginPage={this.loginPage} goToDelete={this.deleteKaryawanPage}/>
        break;
      case "ADD-KARYAWAN":
        return <AddKaryawanComponent goToHomePage={this.homePage} goToHomePageParam={this.homePageParam}/>
        break;
      case "EDIT-KARYAWAN":
        console.log(this.state.id)
        for (let i = 0; i < this.state.listKaryawan.length; i++) {
          if (this.state.listKaryawan[i].id === this.state.id) { 
            return <EditKaryawanComponent goToHomePage={this.homePage} saveEdit={this.saveEdit}
            data={this.state.listKaryawan[i]}
            />
          }
        }
       
        break;
      case "DETAIL-KARYAWAN":
        console.log(this.state.id)
        for (let i = 0; i < this.state.listKaryawan.length; i++) {
          if (this.state.listKaryawan[i].id === this.state.id) { 
            return <ProfilComponent data={this.state.listKaryawan[i]} goToHomePage={this.homePage}/>
          }
        }
        break;
      case "LOGOUT-KARYAWAN":
          return <LoginComponent data={this.state.listKaryawan} goToHomePage={this.homePage}/>
        break;
      case "USER-HOME":
        console.log(this.state.id)
        for (let i = 0; i < this.state.listKaryawan.length; i++) {
          if (this.state.listKaryawan[i].id === this.state.id) { 
            return <UserComponent data={this.state.listKaryawan[i]} goToLoginPage={this.loginPage} gotToUserPage={this.userHomePage}/>
          }
        }
        break;

      default:
        break;
    } 
  }

  render() { 
    return (
      <div className="container">
        {this.showPage()}
      </div>
    );
  }
}
// function App() {
  
//   return (
//     <BrowserRouter>
//       <div className="container">
//         <Switch>
//         <Route exact path="/"><LoginComponent /></Route>
//         <Route  path="/login"><LoginComponent /></Route>
//         <Route  path="/home"><HomeComponent /></Route>
//         <Route  path="/user"><UserComponent /></Route>
//         <Route  path="/add-karyawan"><AddKaryawanComponent /></Route>
//         <Route  path="/edit-karyawan/:id"><EditKaryawanComponent /></Route>
//         <Route  path="/detail-karyawan/:id"><UserComponent /></Route>
//         <Route  path="/home-user/:id"><ProfilComponent /></Route>
//       </Switch>
//       </div>
//       </BrowserRouter>
//   );
// }

export default App;
