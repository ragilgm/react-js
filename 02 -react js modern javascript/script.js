var no = 1;
var listBiodata = [
    {
        "id": 1,
        "username": "ragil",
        "password": "ragil",
        "nama": "ragil gilang maulana",
        "alamat": "bojong gede",
        "pekerjaan": "bermain game",
        "hobby": ["bermain", "belajar"]
    }
];

var state = {
    'querySet': listBiodata,
    
    'page': 1,
    'rows': 2,
    'window': 3,
}

function buildTable() {
    var table = document.getElementById("table-body");
    
    var data = pagination(state.querySet, state.page, state.rows)
    var myList = data.querySet
    
    for (var i = 1 in myList) {
        var rows = document.createElement("tr")
        rows.setAttribute("class","rows-data")

        var biodata = `
                        <th scope="row" class="text-center">${myList[i].id}</th>
                        <td class="text-center">${myList[i].username}</td>
                        <td class="text-center">${myList[i].password}</td>
                        <td class="text-center">${myList[i].nama}</td>
                        <td class="text-center">${myList[i].alamat}</td>
                        <td class="text-center">${myList[i].pekerjaan}</td>
                        <td class="text-center">${myList[i].hobby}</td>
                        <td class="text-center">
                           <span class="mr-3" onClick="editHandler(${myList[i].id})">
                                <i class="fas fa-edit"></i>
                            </span>
                            <span onClick="deleteHandler(${myList[i].id})">
                                <i class="fas fa-trash" onClick="deleteHandler(${myList[i].id})"></i>
                            </span>
                        </td>
                        `;
        no++;
        rows.innerHTML=biodata ;
        table.appendChild(rows);
    }
    pageButtons(data.pages)
    }
    
    function pagination(querySet, page, rows) {

        var trimStart = (page - 1) * rows
        var trimEnd = trimStart + rows
        
        var trimmedData = querySet.slice(trimStart, trimEnd)
        
        var pages = Math.round(querySet.length / rows);
        
        return {
           'querySet': trimmedData,
           'pages': pages,
        }
}

function pageButtons(pages) {
    var wrapper = document.getElementById('pagination-wrapper')
    
    wrapper.innerHTML = ``
    
    var maxLeft = (state.page - Math.floor(state.window / 2))
    var maxRight = (state.page + Math.floor(state.window / 2))
    
    if (maxLeft < 1) {
       maxLeft = 1
       maxRight = state.window
    }
    
    if (maxRight > pages) {
       maxLeft = pages - (state.window - 1)
       
       if (maxLeft < 1){
          maxLeft = 1
       }
       maxRight = pages
    }
    

    for (var page = maxLeft; page <= maxRight; page++) {
        wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-link">${page}</button>`
      }
      
      if (state.page != 1) {
         wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-link">&#171; First</button>` + wrapper.innerHTML
      }
      
      if (state.page != pages) {
         wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-link">Last &#187;</button>`
      }
      
      $('.page').on('click', function() {
         $('#table-body').empty()
      
         state.page = Number($(this).val())
      
         buildTable()
      })
      
}    
      
var id = listBiodata.length + 1;

loginPage = () => { 
    var addForm = document.querySelector(".register");
    var LoginForm = document.querySelector(".login");
    LoginForm.style.display = "block";
    addForm.style.display="none";
}

logoutHandler = () => { 
    document.querySelector(".home").style.display = "none";
    var addForm = document.querySelector(".register");
    var LoginForm = document.querySelector(".login");
    LoginForm.style.display = "block";
    addForm.style.display="none";
}

function addBiodata() { 
    var username = document.getElementById("usernameRegist");
    var password = document.getElementById("passwordRegist");
    console.log(username.value);
    console.log(password.value);
    var nama = document.getElementById("nama");
    var alamat = document.getElementById("alamat");
    var pekerjaan = document.getElementById("pekerjaan");
    var hobby = [];
    var belajar = document.getElementById("belajar");
    var bermain = document.getElementById("bermain");
    var ngoding = document.getElementById("ngoding");
    
    if (belajar.checked==true) { 
        hobby.push(belajar.value);
    }
    if (bermain.checked==true) { 
        hobby.push(bermain.value);
    }
    if (ngoding.checked==true) { 
        hobby.push(ngoding.value);
    }
    
    var checkExistUsername = checkUsernameExist(listBiodata, username.value);
    if (checkExistUsername) {
        alert("username sudah di gunakan");
         var fom = document.getElementById("form-data").style.display = "none";
        return;
    }
    
    var biodata = {
            id: id ,
            username: username.value,
            password: password.value,
            nama: nama.value,
            alamat: alamat.value,
            pekerjaan: pekerjaan.value,
            hobby: hobby,
        }
    id++;
    console.log("username:"+username);
    console.log("passwrod:"+password);

    listBiodata.push(biodata);
    console.log("called")
    console.log(listBiodata)

        username.value = "";
        password.value = "";
        nama.value = "";
        alamat.value = "";
        pekerjaan.value = "";
        belajar.checked = false;
        bermain.checked = false;
        ngoding.checked = false;
              swal("data berhasil di tambahkan", {
              icon: "success",
            });
            document.getElementById("table-body").innerHTML = "";
            buildTable();
}

function updateBiodata() { 
    
    var id = document.getElementById("id");
    var username = document.getElementById("username");
    var nama = document.getElementById("nama");
    var alamat = document.getElementById("alamat");
    var pekerjaan = document.getElementById("pekerjaan");
    var hobby = [];
    var belajar = document.getElementById("belajar");
    var bermain = document.getElementById("bermain");
    var ngoding = document.getElementById("ngoding");

    if (belajar.checked==true) { 
        hobby.push(belajar.value);
    }
    if (bermain.checked==true) { 
        hobby.push(bermain.value);
    }
    if (ngoding.checked==true) { 
        hobby.push(ngoding.value);
    }
    var currentData = {};

    for (let i = 0; i < listBiodata.length; i++) {
        if (listBiodata[i].id == id.value) { 

            currentData = {
                id: listBiodata[i].id,
                username: username.value,
                nama: nama.value,
                alamat: alamat.value,
                pekerjaan: pekerjaan.value,
                hobby:hobby
            }

            listBiodata[i] = currentData;
            swal("data berhasil di edit", {
                icon: "success",
              });
            document.getElementById("table-body").innerHTML = "";
            buildTable();            
            document.getElementById("form-data").innerHTML="";
            break;
        }
    }
}

function checkUsernameExist(data, username) { 
    var dataExist = false;
    for (let i = 0; i < data.length; i++) {
        if (data[i].username === username) {
            dataExist = true;
            break;
        }
    }
    return dataExist;
}

function editHandler(id) { 
    var addForm = document.getElementById("form-data");
    addForm.innerHTML=editFormData();

    var curentId = document.getElementById("id");
    var username = document.getElementById("username");
    var nama = document.getElementById("nama");
    var alamat = document.getElementById("alamat");
    var pekerjaan = document.getElementById("pekerjaan");
    var belajar = document.getElementById("belajar");
    var bermain = document.getElementById("bermain");
    var ngoding = document.getElementById("ngoding");

    currentData = {}

    listBiodata.forEach(data => {
        if (data.id == id) { 
            currentData.id = data.id;
            currentData.username = data.username;
            currentData.nama = data.nama;
            currentData.alamat = data.alamat;
            currentData.pekerjaan = data.pekerjaan;
            currentData.hobby = [];
            for (let i = 0; i < data.hobby.length; i++) {
                currentData.hobby.push(data.hobby[i]);
            }
            stop();
        }
    });
    curentId.value = currentData.id;
    username.value = currentData.username;
    nama.value = currentData.nama;
    alamat.value = currentData.alamat;
    pekerjaan.value = currentData.pekerjaan;

    for (let i = 0; i < currentData.hobby.length; i++) {
        if (currentData.hobby[i] == belajar.value) { 
            belajar.checked = true
        }
        if (currentData.hobby[i] == bermain.value) { 
            bermain.checked = true
        }
        if (currentData.hobby[i] == ngoding.value) { 
            ngoding.checked = true
        }
    }
}
function deleteHandler(id) { 
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
                  for (let i = 0; i < listBiodata.length; i++) {
                      if (listBiodata[i].id == id) {
                          listBiodata.splice(i, i + 1);
                          break;
                      }
                  
                  }
                  document.getElementById("table-body").innerHTML = "";
                  buildTable();
        } else {
            return;
        }
      });
   
}

function addHandler() { 
    var addForm = document.querySelector(".register");
    var LoginForm = document.querySelector(".login");
    LoginForm.style.display = "none";
    addForm.style.display="block";
}

loginHandler = ()=> { 
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    console.log(username.value)
    console.log(password.value)
    console.log(listBiodata)
    listBiodata.forEach(element => {
        console.log(element.username)
        console.log(element.password)
        if (element.username === username.value && element.password === password.value) {
            alert("login successfull");
            var home = document.querySelector(".home").style.display = "block";
            var table = document.getElementById("table-body").innerHTML = "";
            buildTable();
            var login = document.querySelector(".login").style.display = "none";
        } else {
            console.log("not login")
         }
    });

}


function cancel(){ 
    var addForm = document.getElementById("form-data");
    addForm.innerHTML="";
}

function editFormData(id) { 
    var form = `
    <h3 class="ml-5 mt-3">form biodata</h3>
        <div class="col-lg-6 ">
           <div class="card ">
            <div class=" shadow mx-5 my-5 ">
               
                <form>
                    <input type="hidden" id="id">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username"  placeholder="masukan username" disabled>
                      </div>
                    <div class="form-group">
                      <label for="nama">Nama</label>
                      <input type="text" class="form-control" id="nama"  placeholder="masukan nama">
                    </div>
                    <div class="form-group">
                      <label for="alamat">Alamat</label>
                      <input type="text" class="form-control" id="alamat" placeholder="Masukan Alamat">
                    </div>
                    <div class="form-group">
                      <label for="pekerjaan">Pekerjaan</label>
                      <input type="text" class="form-control" id="pekerjaan" placeholder="Masukan Pekerjaan">
                    </div>
                    <label for="hobby">Hobby</label>
                    <div id="hobby">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                              <input type="checkbox" value="belajar" id="belajar"> <label for="belajar" class="ml-2">belajar</label>
                            </div>
                            <div class="input-group-text ml-3">
                              <input type="checkbox" value="bermain" id="bermain"> <label for="bermain" class="ml-2">bermain</label> 
                            </div>
                            <div class="input-group-text ml-3">
                              <input type="checkbox" value="ngoding" id="ngoding"> <label for="ngoding" class="ml-2">ngoding</label> 
                            </div>

                          </div>
                    </div>
                    
                </form>
                <button type="submit" class="btn btn-primary btn-sm mt-3" onclick="updateBiodata()">Update Data</button>
                <button type="submit" class="btn btn-danger btn-sm mt-3" onclick="cancel()">Cancel</button>
            </div>
           </div>
        </div>
    `;
    return form;
}

