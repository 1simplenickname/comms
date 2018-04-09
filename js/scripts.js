function login() {
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("mailing").style.visibility = "hidden";
    document.getElementById("question").style.visibility = "hidden";
    document.getElementById("loginScreen").style.visibility = "visible";
}

// function loginScreenCross() {
//     document.getElementById("loginScreen").style.visibility = "hidden";
//     document.getElementById("logo").style.visibility = "visible";
// }

function loginScreenSubmit() {
    document.getElementById("loginScreen").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("mailing").style.visibility = "visible";
    document.getElementById("question").style.visibility = "visible";
}

function mailing() {
    window.open("#","_self")
}

function question() {
    window.open("#","_self")
}
