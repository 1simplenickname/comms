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

function signupScreenClose() {
    document.getElementById("signupScreen").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("signup").style.visibility = "visible";
    document.getElementById("question").style.visibility = "visible";
}

function question() {
    window.open("#","_self")
}

function passwordStrength() {
    let password = document.getElementById("signupScreenPasswordField").value;
    let passwordField = document.getElementById("signupScreenPasswordField");
    let passwordRepeatField = document.getElementById("signupScreenPasswordRepeatField");
    let strength = 0;

    if  (password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
        strength += 1
    }
    if (password.match(/[!?@£$%^&*()~<>]+/)) {
        strength += 1
    }
    if (password.length > 5) {
        strength += 1
    }

    switch(strength) {
        // very weak password
        case 0:
            passwordField.style.color = "#EF2E2E";
            break;
        // weak password
        case 1:
            passwordField.style.color = "#EF7E2E";
            break;
        // strong password
        case 2:
            passwordField.style.color = "#DFAF2B";
            break;
        // very strong password
        case 3:
            passwordField.style.color = "#24B936";
            break;
    }
}