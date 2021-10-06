function generateID(){
    var now = Date.now();
    var d = now.toString();
    document.getElementById("uniqueID").value = d;
}

function disableID(){
    document.getElementById("uniqueID").disabled = true;
}

function store(){
    var uid = document.getElementById("uniqueID");
    var nameG = document.getElementById("name");
    var guardiannameG = document.getElementById("guardianname");
    var genderG = document.getElementById("gender");
    var dobG = document.getElementById("dob");
    var mobileG = document.getElementById("mobile");
    var emailG = document.getElementById("email");
    var pincodeG = document.getElementById("pincode");
    var addressG = document.getElementById("address");
    
    var val = uid.value;

    localStorage.setItem("uniqueID", val);
    localStorage.setItem("name1"+val, nameG.value);
    localStorage.setItem("guardianname"+val, guardiannameG.value);
    localStorage.setItem("gender"+val, genderG.value);
    localStorage.setItem("dob"+val, dobG.value);
    localStorage.setItem("mobile"+val, mobileG.value);
    localStorage.setItem("email"+val, emailG.value);
    localStorage.setItem("pincode"+val, pincodeG.value);
    localStorage.setItem("address"+val, addressG.value);
}

function restore(uid){
    let nameG = localStorage.getItem("name1"+uid);
    var guardiannameG = localStorage.getItem("guardianname"+uid);
    var genderG = localStorage.getItem("gender"+uid);
    var dobG = localStorage.getItem("dob"+uid);
    var mobileG = localStorage.getItem("mobile"+uid);
    var emailG = localStorage.getItem("email"+uid);
    var pincodeG = localStorage.getItem("pincode"+uid);
    var addressG = localStorage.getItem("address"+uid);

    document.getElementById("name").value = nameG;
    document.getElementById("guardianname").value = guardiannameG;
    document.getElementById("gender").value = genderG;
    document.getElementById("dob").value = dobG;
    document.getElementById("mobile").value = mobileG;
    document.getElementById("email").value = emailG;
    document.getElementById("pincode").value = pincodeG;
    document.getElementById("address").innerHTML = addressG;
}