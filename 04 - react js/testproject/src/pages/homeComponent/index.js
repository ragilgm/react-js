import React, { Component } from 'react';
import Data from '../../data/Data';
import './style.css'
import swal from 'sweetalert';
import { LoginComponent, UserComponent, AddKaryawanComponent, ProfilComponent,EditKaryawanComponent } from '../'
import App from '../../App';

class HomeComponent extends Component {

   constructor(props) {
      super(props);
      this.state = {
         listKaryawan: [],
      }

   }

   componentDidMount() { 
      var data = this.props.data;
      this.setState({listKaryawan:data})
   }

   detailKaryawanHandler = (id) => { 
      console.log("called")
      var intId = parseInt(id);
            this.props.goToProfilePage(id);
   }

   editKaryawanHandler = (id) => { 
      console.log("id from home" + id)
      this.props.goToEditPage(id);
   }

   deleteKaryawanHandler = (id) => { 
      swal({
         title: "Korfirmasi",
         text: "Apakah Anda Yakin Ingin Menghapus Data ini?",
         icon: "warning",
         buttons: true,
         dangerMode: true,
       })
       .then((willDelete) => {
         if (willDelete) {
           swal("data berhasil di hapus", {
               icon: "success",
             });
            this.props.goToDelete(id);
                   
         } else {
             return;
         }
       });
   }

   addKaryawanHandler = () => { 
      this.props.goToAddPage();
   }

   logoutHandler = () => { 
      this.props.goToLoginPage();
   }

   render() {
      console.log(this.state.listKaryawan)
      return (
         <div className="mt-5 ">
            <h1 className="text-center">Management Karyawan</h1>
            <div className="d-flex">
               <div className="mr-auto p-2">
               <button className="btn btn-sm btn-primary add-karyawan mt-5 " onClick={this.addKaryawanHandler}>add Karyawan</button>
               </div>
               <div className="p-2">
               <button className="btn btn-sm btn-primary add-karyawan mt-5  align-items-end flex-column" onClick={this.logoutHandler}><i className="fas fa-sign-out-alt"></i></button>
             </div>
            
           
            </div>
            <table className="table mt-3 text-center">
               <thead className="thead-dark">
                  <tr>
                     <th scope="col">Id</th>
                     <th scope="col">Username</th>
                     <th scope="col">Password</th>
                     <th scope="col">Fullname</th>
                     <th scope="col">Position</th>
                     <th scope="col">Action</th>
                  </tr>
               </thead>
               <tbody>
                        {this.state.listKaryawan.map(data => 
                           <tr key={data.id}>
                           <th scope="row">{data.id}</th>
                           <td>{data.username}</td>
                           <td>{data.password}</td>
                           <td>{data.fullname}</td>
                           <td>{data.position}</td>
                              <td>
                                 <span onClick={() => this.detailKaryawanHandler(data.id)}><i><i className="fas fa-info-circle"></i></i></span>
                                 <span onClick={()=> this.editKaryawanHandler(data.id)}><i><i className="fas fa-edit ml-3 mr-3"></i></i></span>
                                 <span onClick={()=> this.deleteKaryawanHandler(data.id)}><i><i className="fas fa-trash"></i></i></span>
                              </td>
                        </tr>
                     )}
               </tbody>
               </table>
            <br />
            <hr/>
         </div>
      );
   }
}

export default HomeComponent;