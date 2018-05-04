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
    let password = document.getElementById("signupScreenPasswordField");
    let strength = 0;
    // checks if the password contains any alphanumerical characters and/or numbers
    if  (password.value.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
        strength += 1
    }
    // checks if the password contains any special characters
    if (password.value.match(/[!?@£$%^&*()~<>]+/)) {
        strength += 1
    }
    // checks if the password is longer than 5 characters
    if (password.value.length > 5) {
        strength += 1
    }
    switch(strength) {
        // very weak password
        case 0:
            password.style.color = "#EF2E2E";
            break;
        // weak password
        case 1:
            password.style.color = "#EF7E2E";
            break;
        // strong password
        case 2:
            password.style.color = "#DFAF2B";
            break;
        // very strong password
        case 3:
            password.style.color = "#24B936";
            break;
    }
}

function passwordMatch() {
    let password = document.getElementById("signupScreenPasswordField");
    let passwordRepeat = document.getElementById("signupScreenPasswordRepeatField");
    if (password.value !== passwordRepeat.value) {
        passwordRepeat.style.color = "#EF2E2E";
    } else {
        passwordRepeat.style.color = "#24B936";
    }
}