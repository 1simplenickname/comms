function login() {
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("signup").style.visibility = "hidden";
    document.getElementById("question").style.visibility = "hidden";
    document.getElementById("loginScreen").style.visibility = "visible";
}

function loginScreenEnter() {
    if (event.keyCode === 13) {
        loginScreenSubmit();
    }
}

function loginScreenSubmit() {
        let loginScreen = document.getElementById("loginScreenForm");
        document.getElementById("login").style.visibility = "visible";
        document.getElementById("signup").style.visibility = "visible";
        document.getElementById("question").style.visibility = "visible";
        document.getElementById("loginScreen").style.visibility = "hidden";
        loginScreen.reset();
}

function signup() {
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("signup").style.visibility = "hidden";
    document.getElementById("question").style.visibility = "hidden";
    document.getElementById("signupScreen").style.visibility = "visible";
}

function passwordStrength() {
    let password = document.getElementById("signupScreenPasswordField");
    let strength = 0;
    if  (password.value.match(/[a-z][a-z]+/)) {
        strength += 1
    }
    if  (password.value.match(/[A-Z]+/)) {
        strength += 1
    }
    if  (password.value.match(/[0-9]+/)) {
        strength += 1
    }
    if (password.value.match(/[!?@£$%^&*()~<>]+/)) {
        strength += 1
    }
    if (password.value.length > 5) {
        strength += 1
    }
    switch(strength) {
        // very weak password
        case 0:
            password.style.color = "#EF2E2E";
            break;
        // weak password
        case 2:
            password.style.color = "#EF7E2E";
            break;
        // strong password
        case 3:
            password.style.color = "#DFAF2B";
            break;
        // very strong password
        case 4:
            password.style.color = "#24B936";
            break;
    }
}

function passwordMatch() {
    let password = document.getElementById("signupScreenPasswordField");
    let passwordRepeat = document.getElementById("signupScreenPasswordRepeatField");
    let submitButton = document.getElementById("signupScreenSubmit");
    if (password.value !== passwordRepeat.value) {
        passwordRepeat.style.color = "#EF2E2E";
    } else {
        passwordRepeat.style.color = "#24B936";
        signupScreenEnter();
        submitButton.onclick = function () {signupScreenSubmit()};
    }
}

function signupScreenEnter() {
    if (event.keyCode === 13) {
        signupScreenSubmit();
    }
}

function signupScreenSubmit() {
    let submitScreen = document.getElementById("signupScreenForm");
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("signup").style.visibility = "visible";
    document.getElementById("question").style.visibility = "visible";
    document.getElementById("signupScreen").style.visibility = "hidden";
    submitScreen.reset();
}

function question() {
    window.open("#","_self")
}