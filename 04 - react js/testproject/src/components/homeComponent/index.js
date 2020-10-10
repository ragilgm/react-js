import React, { Component } from 'react';
import Data from '../../data/Data';
import './style.css'
import { withRouter } from 'react-router';
import swal from 'sweetalert';

class HomeComponents extends Component {

   constructor(props) {
      super(props);
      this.state = {
         listKaryawan: [],
      }

   }

   componentDidMount() { 
      var data = Data.listData();
      this.setState({listKaryawan:data})
   }

   detailKaryawanHandler = (id) => { 
      this.props.history.push(`/detail-karyawan/${id}`)
   }

   editKaryawanHandler = (id) => { 
      this.props.history.push(`/edit-karyawan/${id}`)
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
            Data.deleteKaryawan(id)
            this.props.history.push("/home");
                   
         } else {
             return;
         }
       });
   }

   addKaryawanHandler = () => { 
      this.props.history.push("/add-karyawan")
   }

   logoutHandler = () => { 
      this.props.history.push("/login");
   }

   render() {
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

export default withRouter(HomeComponents);