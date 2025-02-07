function validatelogin() {
    document.getElementById("errorContainer").innerHTML = "";
    document.getElementById("errorContainer2").innerHTML = "";
    var email = document.getElementById("emailin").value;
    var password = document.getElementById("passwordin").value;
    document.getElementById("emailin").style.border = "3px solid #d1d1d1";
    document.getElementById("passwordin").style.border = "3px solid #d1d1d1";

    if (email === "admin" && password === "admin") {
        window.location.href = "dashboard.html";


    }

    if (email === "") {
        errorContainer.innerHTML = "Please enter a username.";
        document.getElementById("emailin").style.border = "3px solid red";
        return false;
    }
    if (password === "") {
        errorContainer2.innerHTML = "Please enter a password.";
        document.getElementById("passwordin").style.border = "3px solid red";

        return false;
    }

    if (password.length < 8) {
        errorContainer2.innerHTML = "Password must be at least 8 characters long";
        document.getElementById("passwordin").style.border = "3px solid red";
        return false;
    }
    return true;
}

function validatesignup() {
    document.getElementById("errorContainer").innerHTML = "";
    document.getElementById("errorContainer2").innerHTML = "";
    document.getElementById("errorContainer3").innerHTML = "";


    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    document.getElementById("email").style.border = "3px solid #d1d1d1";
    document.getElementById("pass1").style.border = "3px solid #d1d1d1";
    document.getElementById("name").style.border = "3px solid #d1d1d1";
    document.getElementById("pass2").style.border = "3px solid #d1d1d1";

    var errorContainer = document.getElementById("errorContainer");
    errorContainer.innerHTML = "";
    if (name === "") {
        errorContainer2.innerHTML = "Please enter a name";
        document.getElementById("name").style.border = "3px solid red";

        return false;
    }
    if (email === "") {
        errorContainer3.innerHTML = "Please enter an email";
        document.getElementById("email").style.border = "3px solid red";
        return false;
    }



    var nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(name)) {
        errorContainer2.innerHTML = "Name cannot contain special characters";
        document.getElementById("name").style.border = "3px solid red";
        return false;
    }


    for (var i = 0; i < email.length; i++) {
        if (email[i] == " ") {
            errorContainer3.innerHTML = "Email cannot contain spaces";
            document.getElementById("email").style.border = "3px solid red";
            return false;
        }
    }
    var at = email.indexOf("@");
    if (at == -1) {
        errorContainer3.innerHTML = "Email must contain an @ symbol";
        document.getElementById("email").style.border = "3px solid red";
        return false;
    }


    if (pass1 !== pass2) {
        errorContainer.innerHTML = "Passwords do not match";
        document.getElementById("pass1").style.border = "3px solid red";
        document.getElementById("pass2").style.border = "3px solid red";
        return false;
    }
    if (errorContainer.innerHTML !== "") {
        return false;
    }

    if (pass1.length < 8) {
        errorContainer.innerHTML = "Password must be at least 8 characters long";
        document.getElementById("pass1").style.border = "3px solid red";
        document.getElementById("pass2").style.border = "3px solid red";
        return false;
    }
    return true;

}
function togglePasswordVisibility(event) {
    event.preventDefault();
    var passwordField = document.getElementById("passwordin");
    var toggleButton = document.getElementById("toggleButton");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.src = "images/passeye.png";
    } else {
        passwordField.type = "password";
        toggleButton.src = "images/passeye.png";
    }
}
var originalEyeSrc;

function eyecolor(event) {
    var img = event.target;
    originalEyeSrc = img.src;
    img.src = "images/passeye2.png";
}


function resetEyeColor(event) {
    var img = event.target;
    img.src = originalEyeSrc;
}

function convertToPDF() {
    console.log("Converting to PDF...");
    const table = document.querySelector('#grptablepdf');
    const doc = new jsPDF();
    doc.autoTable({
        html: table,

    });
    doc.save('table.pdf');
}
