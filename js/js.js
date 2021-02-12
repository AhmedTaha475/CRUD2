

var nameInput = document.getElementById("siteName");
var urlInput = document.getElementById("siteUrl");
var addBtn = document.getElementById("subBtn");
var inputs = document.getElementsByClassName("form-control");
var req = document.getElementById("alert");
var pat = document.getElementById("Pattern");
var req2 = document.getElementById("alert2");
var pat2 = document.getElementById("Pattern2");
var bookMarks;
var updateIndex;
var ind1;
var ind2;
if (localStorage.getItem("site") == null) {
    bookMarks = [];
}
else {
    bookMarks = JSON.parse(localStorage.getItem("site"));
    displayData();
}
addBtn.onclick = function () {
    if (document.getElementById("subBtn").innerHTML == "Submit") {

        if (nameInput.value == "" || urlInput.value == "") {
            /*  addBtn.disabled = "true" */
            if (nameInput.value == "" && !urlInput.value == "") {
                req.classList.remove("d-none");
                pat.classList.remove("d-none");
            }
            else if (urlInput.value == "" && !nameInput.value == "") {
                req2.classList.remove("d-none");
                pat2.classList.remove("d-none");
            }
            else if (urlInput.value == "" && nameInput.value == "") {
                req.classList.remove("d-none");
                pat.classList.remove("d-none");
                req2.classList.remove("d-none");
                pat2.classList.remove("d-none");
            }


        }

        else {
            if (ind1 == true && ind2 == true) {
                addBk();
                displayData();
                resetData();
            }

        }
    }
    else {
        if (nameInput.value == "" || urlInput.value == "") {
            /*  addBtn.disabled = "true" */
            if (nameInput.value == "" && !urlInput.value == "") {
                req.classList.remove("d-none");
                pat.classList.remove("d-none");
            }
            else if (urlInput.value == "" && !nameInput.value == "") {
                req2.classList.remove("d-none");
                pat2.classList.remove("d-none");
            }
            else if (urlInput.value == "" && nameInput.value == "") {
                req.classList.remove("d-none");
                pat.classList.remove("d-none");
                req2.classList.remove("d-none");
                pat2.classList.remove("d-none");
            }


        }
        else {

            if (ind1 == true && ind2 == true) {
                editData();
                displayData();
                resetData();
            }
        }

    }
}


function addBk() {
    var bookMark = {
        name: nameInput.value,
        url: urlInput.value
    }
    bookMarks.push(bookMark);
    localStorage.setItem("site", JSON.stringify(bookMarks));
}

function displayData() {
    var div = "";
    for (var i = 0; i < bookMarks.length; i++) {
        div +=
            `
       
 <div class="js-bk row  py-5 ml-2 mr-2">
         <h2 class="ml-4 w-25 ">${bookMarks[i].name}</h2>
         <div class="btn3 w-50  d-flex   ">
           <a href="http://${bookMarks[i].url}" class="btn btn-primary  com" target="_blank">Visit</a>
            <button onclick="deleteData(${i})" class="btn red ml-3 com">Delete</button>
            <button onclick="updateData(${i})" class="btn btn-warning text-white ml-3 com">Update</button>
        </div>   
</div>
            
        `
    }
    document.getElementById("bk-data").innerHTML = div;


}
function resetData() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}
function deleteData(index) {
    bookMarks.splice(index, 1);
    displayData();
    localStorage.setItem("site", JSON.stringify(bookMarks));
}
function updateData(index) {
    document.getElementById("subBtn").innerHTML = "Edit";
    nameInput.value = bookMarks[index].name;
    urlInput.value = bookMarks[index].url;
    updateIndex = index;
    req.classList.add("d-none");
    pat.classList.add("d-none");
    req2.classList.add("d-none");
    pat2.classList.add("d-none");
}
function editData() {

    bookMarks[updateIndex].name = nameInput.value;
    bookMarks[updateIndex].url = urlInput.value;
    localStorage.setItem("site", JSON.stringify(bookMarks));
    document.getElementById("subBtn").innerHTML = "Submit";
}
function search(searchText) {
    var div = "";

    for (var i = 0; i < bookMarks.length; i++) {
        if (bookMarks[i].name.toLowerCase().includes(searchText.toLowerCase())) {
            div +=
                `
       
 <div class="js-bk row  py-5 ml-2 mr-2">
         <h2 class="ml-4 w-25 ">${bookMarks[i].name}</h2>
         <div class="btn3 w-50  d-flex   ">
           <a href="http://${bookMarks[i].url}" class="btn btn-primary  com" target="_blank">Visit</a>
            <button onclick="deleteData(${i})" class="btn red ml-3 com">Delete</button>
            <button onclick="updateData(${i})" class="btn btn-warning text-white ml-3 com">Update</button>
        </div>   
</div>
            
        `
        }
    }
    document.getElementById("bk-data").innerHTML = div;



}


nameInput.onkeyup = function () {
    var nameRejex = /^[A-Z][a-z]{2,10}$/
    if (!nameRejex.test(nameInput.value)) {
        /*    addBtn.disabled = "true"; */
        req.classList.add("d-none");
        pat.classList.remove("d-none");
        ind1 = false;

    }

    else {
        addBtn.removeAttribute("disabled")
        req.classList.add("d-none");
        pat.classList.add("d-none");
        ind1 = true;

    }

}


urlInput.onkeyup = function () {
    var urlRejex = /^www.[a-zA-z0-9]{2,15}.com$/
    if (!urlRejex.test(urlInput.value)) {
        /*  addBtn.disabled = "true"; */
        req2.classList.add("d-none");
        pat2.classList.remove("d-none");
        ind2 = false;

    }

    else {
        addBtn.removeAttribute("disabled")
        req2.classList.add("d-none");
        pat2.classList.add("d-none");
        ind2 = true;

    }

}

