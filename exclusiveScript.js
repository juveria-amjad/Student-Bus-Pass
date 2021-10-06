function generateID(){
    var now = Date.now();
    var d = now.toString();
    document.getElementById("uniqueIDE").value = d;
}

function disableID(){
    document.getElementById("uniqueIDE").disabled = true;
}

function store(){
    var uidE = document.getElementById("uniqueIDE");
    var cityE = document.getElementById("city");
    var institutionE = document.getElementById("institution");
    var nameE = document.getElementById("name");
    var guardiannameE = document.getElementById("guardianname");
    var genderE = document.getElementById("gender");
    var dobE = document.getElementById("dob");
    var mobileE = document.getElementById("mobile");
    var emailE = document.getElementById("email");
    var aadharE = document.getElementById("aadhar");
    var pincodeE = document.getElementById("pincode");
    var addressE = document.getElementById("address");
    
    var val = uidE.value;

    localStorage.setItem("uniqueIDE", val);
    localStorage.setItem("cityE"+val, cityE.value);
    // localStorage.setItem("institutionE"+val, institutionE.value);
    localStorage.setItem("name2"+val, nameE.value);
    localStorage.setItem("guardiannameE"+val, guardiannameE.value);
    localStorage.setItem("genderE"+val, genderE.value);
    localStorage.setItem("dobE"+val, dobE.value);
    localStorage.setItem("mobileE"+val, mobileE.value);
    localStorage.setItem("emailE"+val, emailE.value);
    localStorage.setItem("aadharE"+val, aadharE.value);
    localStorage.setItem("pincodeE"+val, pincodeE.value);
    localStorage.setItem("addressE"+val, addressE.value);
}

function restore(uid){
    let nameE = localStorage.getItem("name2"+uid);
    var cityE = localStorage.getItem("cityE"+uid);
    var institutionE = localStorage.getItem("institutionE"+uid);
    var guardiannameE = localStorage.getItem("guardiannameE"+uid);
    var genderE = localStorage.getItem("genderE"+uid);
    var dobE = localStorage.getItem("dobE"+uid);
    var mobileE = localStorage.getItem("mobileE"+uid);
    var emailE = localStorage.getItem("emailE"+uid);
    var aadharE = localStorage.getItem("aadharE"+uid);
    var pincodeE = localStorage.getItem("pincodeE"+uid);
    var addressE = localStorage.getItem("addressE"+uid);

    document.getElementById("city").value = cityE;
    // document.getElementById("institution").value = institutionE;
    document.getElementById("name").value = nameE;
    document.getElementById("guardianname").value = guardiannameE;
    document.getElementById("gender").value = genderE;
    document.getElementById("dob").value = dobE;
    document.getElementById("mobile").value = mobileE;
    document.getElementById("email").value = emailE;
    document.getElementById("aadhar").value = aadharE;
    document.getElementById("pincode").value = pincodeE;
    document.getElementById("address").innerHTML = addressE;
}