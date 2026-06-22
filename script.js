
function showLogin(){
    document.getElementById("signupForm").style.display="none";
    document.getElementById("loginForm").style.display="block";
}

function showSignup(){
    document.getElementById("loginForm").style.display="none";
    document.getElementById("signupForm").style.display="block";
}

function signup(){
    let username  = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Account created successfully!");
    showLogin();
}

function login(){
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if(username === storedUser && password === storedPass){
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    }else{
        alert("Invalid Username or Password");
    }
}
