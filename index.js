function validate() {
    var username = document.getElementById('username').value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;

    checkusername(username);
    checkemail(email);
    checkpassword(password);
    checkpasswordmatch(password, cpassword);
}

function checkusername(params) {
    if (params.length > 7) {
        document.getElementById("username").classList.add("success") ;
        document.getElementById("username").classList.replace("error","success") ;
        document.getElementById("username_error").innerHTML = "";
    } else {
        document.getElementById("username").classList.add("error") ;
        document.getElementById("username_error").innerText = "Username must be 8 letters long.";
    }
}

function checkemail(params) {
    if ((params.length > 8) && (params.includes("@gmail.com"))) {
        document.getElementById("email").classList.add("success") ;
        document.getElementById("email").classList.replace("error","success") ;
        document.getElementById("email_error").innerHTML = "";
    } else {
        document.getElementById("email").classList.add("error") ;
        document.getElementById("email_error").innerText = "E-Mail must be 8 letters long & Includes gmail.com.";
    }
}

function checkpassword(params) {
    if ((params.length > 7) && (params.includes("."))) {
        document.getElementById("password").classList.add("success") ;
        document.getElementById("password").classList.replace("error","success") ;
        document.getElementById("password_error").innerHTML = "";
    } else {
        document.getElementById("password").classList.add("error") ;
        document.getElementById("password_error").innerText = "Password must be 8 letters long & Includes . operator";
    }
}

function checkpasswordmatch(password, cpassword) {
    if ((password==cpassword)) {
        document.getElementById("cpassword").classList.add("success") ;
        document.getElementById("cpassword").classList.replace("error","success") ;
        document.getElementById("cpassword_error").innerHTML = "";
    } else {
        document.getElementById("cpassword").classList.add("error") ;
        document.getElementById("cpassword_error").innerText = "Password does not match.";
    }
}
