var datakaryawan = [
   {
      "id": 1,
      "username": "ragil",
      "password":"ragil",
      "profil": "image1.jpg",
      "fullname" : "ragil",
      "dateOfBirth" : "2020-10-23",
      "gender" : "laki-laki",
      "status" : "lajang",
      "address" : "jakarta",
      "contact" : "08161309852",
      "email": "ragil@gmail.com",
      "position": "admin",
      "role":"admin",
      "selary" : "3000000"
   },
   {
      "id": 2,
      "username": "reza",
      "password":"reza",
      "profil": "image2.jpg",
      "fullname" : "reza",
      "dateOfBirth" : "2020-10-23",
      "gender" : "laki-laki",
      "status" : "lajang",
      "address" : "jakarta",
      "contact" : "08161309852",
      "email": "ragil@gmail.com",
      "position": "staff gudang",
      "role":"user",
      "selary" : "3000000"
   },

];


data();

detailKaryawanHandler = (id) => { 
   var cv = document.querySelector(".cv");
   cv.style.display = "block";
   var listKaryawan = document.querySelector(".data-karyawan");
   listKaryawan.style.display = "none";

   var dataKaryawan;

   datakaryawan.forEach(element => { 
      console.log(element.id)
      if (element.id == id) { 

          dataKaryawan = `<div class=" detail-cv col-lg-12">
         <button class="close btn btn-link justify-content-end" onclick="closeButtonHandler()">x</button>
         <div class="row">
            <div class="col-lg-2 photo-profile">
               <img src="./img/${element.profil}" alt="">
            </div>
         <div class="col-lg-7 curiculum-vitae ">
            <h3 class="text-center">Curiculum Vitae</h3>
            <div class="biodata mt-4 mb-5">
               
               <table>
                  <tbody>
                     <tr>
                        <td>username</td>
                        <td>:</td>
                        <td>${element.username}</td>
                     </tr>
                     <tr>
                        <td>password</td>
                        <td>:</td>
                        <td>${element.password}</td>
                     </tr>
                     <tr>
                        <td>Fullname</td>
                        <td>:</td>
                        <td>${element.fullname}</td>
                     </tr>
                     <tr>
                        <td>Date Of Birth</td>
                        <td>:</td>
                        <td>${element.dateOfBirth}</td>
                     </tr>
                     <tr>
                        <td>Gender</td>
                        <td>:</td>
                        <td>${element.gender}</td>
                     </tr>
                     <tr>
                        <td>Status</td>
                        <td>:</td>
                        <td>${element.status}</td>
                     </tr>
                     <tr>
                        <td>Address</td>
                        <td>:</td>
                        <td>${element.address}</td>
                     </tr>
                     <tr>
                        <td>Contact</td>
                        <td>:</td>
                        <td>${element.contact}</td>
                     </tr>
                     <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>${element.email}</td>
                     </tr>
                     <tr>
                        <td>Postition</td>
                        <td>:</td>
                        <td>${element.position}</td>
                     </tr>
                     <tr>
                        <td>Selary</td>
                        <td>:</td>
                        <td>${element.selary}</td>
                     </tr>
                  </tbody>
               </table>

            </div>
         </div>
         </div>
         </div>`
        
      }
      stop();
   })

   var cvDetail = document.querySelector(".cv-detail");
   cvDetail.innerHTML = dataKaryawan;

  

}

logoutUser = () => { 
   var cv = document.querySelector(".cv");
   cv.style.display = "none";
   var loginPage = document.querySelector(".login");
   loginPage.style.display = "block";
}

logoutAdmin = () => { 
   var loginPage = document.querySelector(".login");
   loginPage.style.display = "block";
   var adminPage = document.querySelector(".data-karyawan");
   adminPage.style.display = "none";

}

loginUser = (id) => { 
   var cv = document.querySelector(".cv");
   cv.style.display = "block";
   var listKaryawan = document.querySelector(".data-karyawan");
   listKaryawan.style.display = "none";

   var dataKaryawan;

   datakaryawan.forEach(element => { 
      console.log(element.id)
      if (element.id == id) { 

          dataKaryawan = `<div class=" detail-cv col-lg-12">
         <div class="close btn btn-link justify-content-end" onclick="logoutUser()">X</div>
         <div class="row">
            <div class="col-lg-2 photo-profile">
               <img src="./img/${element.profil}" alt="">
            </div>
         <div class="col-lg-7 curiculum-vitae ">
            <h3 class="text-center">Curiculum Vitae</h3>
            <div class="biodata mt-4 mb-5">
               
               <table>
                  <tbody>
                     <tr>
                        <td>username</td>
                        <td>:</td>
                        <td>${element.username}</td>
                     </tr>
                     <tr>
                        <td>password</td>
                        <td>:</td>
                        <td>${element.password}</td>
                     </tr>
                     <tr>
                        <td>Fullname</td>
                        <td>:</td>
                        <td>${element.fullname}</td>
                     </tr>
                     <tr>
                        <td>Date Of Birth</td>
                        <td>:</td>
                        <td>${element.dateOfBirth}</td>
                     </tr>
                     <tr>
                        <td>Gender</td>
                        <td>:</td>
                        <td>${element.gender}</td>
                     </tr>
                     <tr>
                        <td>Status</td>
                        <td>:</td>
                        <td>${element.status}</td>
                     </tr>
                     <tr>
                        <td>Address</td>
                        <td>:</td>
                        <td>${element.address}</td>
                     </tr>
                     <tr>
                        <td>Contact</td>
                        <td>:</td>
                        <td>${element.contact}</td>
                     </tr>
                     <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>${element.email}</td>
                     </tr>
                     <tr>
                        <td>Postition</td>
                        <td>:</td>
                        <td>${element.position}</td>
                     </tr>
                     <tr>
                        <td>Selary</td>
                        <td>:</td>
                        <td>${element.selary}</td>
                     </tr>
                  </tbody>
               </table>

            </div>
         </div>
         </div>
         </div>`
        
      }
      stop();
   })

   var cvDetail = document.querySelector(".cv-detail");
   cvDetail.innerHTML = dataKaryawan;

  

}

closeButtonHandler = () => { 
   var cv = document.querySelector(".cv");
   cv.style.display = "none";
   var listKaryawan = document.querySelector(".data-karyawan");
   listKaryawan.style.display = "block";
}

addKaryawanHandler = () => { 
   var listKaryawan = document.querySelector(".data-karyawan");
   listKaryawan.style.display = "none";
}

createDataKaryawan = () => {
   var img = document.getElementById("img");
   var username = document.getElementById("username");
   var password = document.getElementById("password");
   var fullname = document.getElementById("fullname");
   var dateOfBirth = document.getElementById("date-of-birth");
   var lakiLaki = document.getElementById("laki-laki");
   var perempuan = document.getElementById("perempuan");
   var status = document.getElementById("status");
   var address = document.getElementById("address");
   var contact = document.getElementById("contact");
   var email = document.getElementById("email");
   var role = document.getElementById("role");
   var position = document.getElementById("position");
   var Selary = document.getElementById("Selary");

   var gender;
   if (lakiLaki.checked == true) {
      gender = lakiLaki.value;
   } else { 
      gender = perempuan.value;
   }

   var karyawan = {
      id: datakaryawan.length + 1,
      username: username.value,
      password:password.value,
      profil: img.files[0].name,
      fullname : fullname.value,
      dateOfBirth : dateOfBirth.value,
      gender : gender,
      status : status.value,
      address : address.value,
      contact: contact.value,
      email : email.value,
      position : position.value,
      role : role.value,
      selary : Selary.value,
   }


   for (let i = 0; i < datakaryawan.length; i++) {
      if (datakaryawan[i].username === karyawan.username) { 
         swal("username tidak boleh sama", {
            icon: "error",
         });
         return;
      }
      
   }

   datakaryawan.push(karyawan);
   swal("add data karyawan berhasil", {
      icon: "success",
   });
   var tabAdd = document.getElementById("v-pills-add-karyawan");
   tabAdd.classList.remove("active");
   tabAdd.classList.remove("show");
   var tabHome =  document.getElementById("v-pills-home");
   tabHome.classList.add("active");
   tabHome.classList.add("show");

   document.querySelector(".list-karyawan").innerHTML = "";
   data();
}
 
// updateDataKaryawan = () => { 
//    var tabAdd = document.getElementById("v-pills-add-karyawan");
//    tabAdd.classList.remove("active");
//    tabAdd.classList.remove("show");
//    var tabHome =  document.getElementById("v-pills-home");
//    tabHome.classList.add("active");
//    tabHome.classList.add("show");
// }

editKaryawanHandler = (id) => { 
   var element = document.querySelector(".list-karyawan");
   element.style.display = "none";
   var editForm = document.querySelector(".edit");
   editForm.style.display = "block";

   currentData = {};

   datakaryawan.forEach(data => { 
      if (data.id == id) { 
         currentData = data; 
      }
   })


   var id = document.getElementById("id");
   var img = document.getElementById("img");
   var username = document.getElementById("username");
   var password = document.getElementById("password");
   var fullname = document.getElementById("fullname");
   var dateOfBirth = document.getElementById("date-of-birth");
   var lakiLaki = document.getElementById("laki-laki");
   var perempuan = document.getElementById("perempuan");
   var status = document.getElementById("status");
   var address = document.getElementById("address");
   var contact = document.getElementById("contact");
   var email = document.getElementById("email");
   var role = document.getElementById("role");
   var position = document.getElementById("position");
   var Selary = document.getElementById("Selary");

   id.value = data.id;
   img.value = data.img;
   username.value = data.username;
   password.value = data.password;
   fullname.value = data.fullname;



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
                for (let i = 0; i < datakaryawan.length; i++) {
                    if (datakaryawan[i].id == id) {
                     datakaryawan.splice(i, i + 1);
                        break;
                    }
                
                }
                var element = document.querySelector(".list-karyawan").innerHTML = "";
                data();
      } else {
          return;
      }
    });
 
}

loginHandler = () => { 
   var username = document.getElementById("username");
   var password = document.getElementById("password");
   var login = false;
   for (let i = 0; i < datakaryawan.length; i++) {
      if (datakaryawan[i].username == username.value && datakaryawan[i].password == password.value) { 
         swal("login berhasil", {
            icon: "success",
         });
         login = true;
         if (datakaryawan[i].role == "admin") {
            var loginPage = document.querySelector(".login");
            loginPage.style.display = "none";
            var adminPage = document.querySelector(".data-karyawan");
            adminPage.style.display = "block";
         } else { 
            var loginPage = document.querySelector(".login");
            loginPage.style.display = "none";
            var userPage = loginUser(datakaryawan[i].id);
         }
         break;
      } 

   }

   if (!login) { 
      swal("login gagal", {
         icon: "error",
      });
   }


}


function data(){
   var element = document.querySelector(".list-karyawan");
   console.log(datakaryawan)
   datakaryawan.forEach(karyawan => {
      var rows = document.createElement("div");

      insert = `<div class="card card-item" style="width: 10rem;">
                  <img class="card-img-top" src="./img/${karyawan.profil}" alt="Card image cap">
                  <div class="card-body">
                     <h5 class="card-title">${karyawan.fullname}</h5>
                     <p class="card-text">jabatan : ${karyawan.position}</p>
                     <div class="btn btn-sm btn-link button-detail" onclick="detailKaryawanHandler(${karyawan.id})"><i class="fas fa-info-circle"></i></div>
                     <div class="btn btn-sm btn-link button-edit" onclick="editKaryawanHandler(${karyawan.id})"><i class="fas fa-edit"></i></div>
                     <div class="btn btn-sm btn-link button-hapus" onclick="deleteKaryawanHandler(${karyawan.id})"><i class="fas fa-trash"></i></div>
                     </div>
                  </div>`;
     
                  rows.innerHTML=insert;
                  element.appendChild(rows);
   });


}


