function login() {
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("mailing").style.visibility = "hidden";
    document.getElementById("question").style.visibility = "hidden";
    document.getElementById("loginScreen").style.visibility = "visible";
}

function loginScreenSubmit() {
    document.getElementById("loginScreen").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("mailing").style.visibility = "visible";
    document.getElementById("question").style.visibility = "visible";
}

function mailing() {
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("mailing").style.visibility = "hidden";
    document.getElementById("question").style.visibility = "hidden";
    document.getElementById("mailingScreen").style.visibility = "visible";
}

function mailingScreenCross() {
    document.getElementById("mailingScreen").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("mailing").style.visibility = "visible";
    document.getElementById("question").style.visibility = "visible";
}

function question() {
    window.open("#","_self")
}
