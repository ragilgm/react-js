/* eslint-disable react/no-direct-mutation-state */
import { Component } from 'react';

class Data extends Component {

   constructor(props) {
      super(props);
      
      this.state = {
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
   listData() { 
      return this.state.listKaryawan;
   }

   addKaryawan(karyawan) { 
      var checkUsername = this.state.listKaryawan.some(data => data.username === karyawan.username);
      if (checkUsername) { 
         return 0;
      }
      karyawan.id = this.state.listKaryawan.length + 1;
      if (karyawan.position === "admin") {
         karyawan.role = "admin";
      } else { 
         karyawan.role = "user";
      }
      this.setState({ listKaryawan: this.state.listKaryawan.push(karyawan) });
      return 1;
   }

   findById(id) { 
      var intId = parseInt(id);
      for (let i = 0; i < this.state.listKaryawan.length; i++) {
         if (this.state.listKaryawan[i].id === intId) { 
            return this.state.listKaryawan[i];
         }
      }
      return null;
   }

   findByUsername(username) { 
      for (let i = 0; i < this.state.listKaryawan.length; i++) {
         if (this.state.listKaryawan[i].username === username) { 
            return this.state.listKaryawan[i];
         }
      }
      return null;
   }

   updateKaryawan(id, data) { 
      var intId = parseInt(id);
      if (data.position === "admin") {
         data.role = "admin";
      } else { 
         data.role = "user";
      }
      for (let i = 0; i <  this.state.listKaryawan.length; i++) {
         if (this.state.listKaryawan[i].id === intId) { 
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
         }
         
      }
   }

   deleteKaryawan(id) { 
      var array = this.state.listKaryawan;
      var intId = parseInt(id);
      for (let i = 0; i < array.length; i++) {
         if (this.state.listKaryawan[i].id === intId) {
            array.splice(i, 1);
             this.setState({listKaryawan: array});
         }
         
      }
   }




}

export default new Data();