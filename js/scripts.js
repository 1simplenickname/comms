function login() {
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("signup").style.visibility = "hidden";
    document.getElementById("question").style.visibility = "hidden";
    document.getElementById("loginScreen").style.visibility = "visible";
}

function loginScreenSubmit() {
    document.getElementById("loginScreen").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("signup").style.visibility = "visible";
    document.getElementById("question").style.visibility = "visible";
}

function signup() {
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("signup").style.visibility = "hidden";
    document.getElementById("question").style.visibility = "hidden";
    document.getElementById("signupScreen").style.visibility = "visible";
}

function passwordMatch() {
    let password = $("#signupScreenPasswordField").value;
    let passwordRepeat = $("#signupScreenPasswordRepeatField").value;

    if (password != passwordRepeat)
        document.getElementById("signupScreenPasswordField").style.color = "red";
    else
        document.getElementById("signupScreenPasswordField").style.color = "green";
}

function signupScreenClose() {
    document.getElementById("signupScreen").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("signup").style.visibility = "visible";
    document.getElementById("question").style.visibility = "visible";
}

function question() {
    window.open("#","_self")
}

$(document).ready(function () {
    $("#signupScreenPasswordField, #signupScreenPasswordRepeatField").keyup(passwordMatch);
});
