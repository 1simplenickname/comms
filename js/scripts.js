function login() {
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("recruit").style.visibility = "hidden";
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
    document.getElementById("recruit").style.visibility = "visible";
    document.getElementById("question").style.visibility = "visible";
    document.getElementById("loginScreen").style.visibility = "hidden";
    loginScreen.reset();
}

function recruit() {
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("recruit").style.visibility = "hidden";
    document.getElementById("question").style.visibility = "hidden";
    document.getElementById("recruitScreen").style.visibility = "visible";
}

function passwordStrength() {
    let password = document.getElementById("recruitScreenPasswordField");
    let strength = 0;
    if  (password.value.match(/[a-z][a-z]+/)) {
        strength += 1
    }
    if  (password.value.match(/[A-Z][A-Z]+/)) {
        strength += 1
    }
    if  (password.value.match(/[0-9][0-9]+/)) {
        strength += 1
    }
    if (password.value.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/)) {
        strength += 1
    }
    if (password.value.length > 5) {
        strength += 1
    }
    if (password.value.length > 7) {
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
        case 4:
            password.style.color = "#DFAF2B";
            break;
        // very strong password
        case 6:
            password.style.color = "#24B936";
            break;
    }
}

function passwordMatch() {
    let password = document.getElementById("recruitScreenPasswordField");
    let passwordRepeat = document.getElementById("recruitScreenPasswordRepeatField");
    if (password.value !== passwordRepeat.value) {
        passwordRepeat.style.color = "#EF2E2E";
    } else {
        passwordRepeat.style.color = "#24B936";
            cantBeBlank();
    }
}

function cantBeBlank() {
    let username = document.getElementById("recruitScreenUsernameField");
    let password = document.getElementById("recruitScreenPasswordField");
    let passwordRepeat = document.getElementById("recruitScreenPasswordRepeatField");
    let submitButton = document.getElementById("recruitScreenSubmit");
    if (username.value === null || username.value === "",
        password.value === null || password.value === "",
        passwordRepeat.value === null || passwordRepeat.value === "") {
        // do nothing
    } else if (password.value.length < 6){
        // do nothing
    } else {
        recruitScreenEnter();
        submitButton.onclick = function () {recruitScreenSubmit()};
    }
}

function recruitScreenEnter() {
    if (event.keyCode === 13) {
        recruitScreenSubmit();
    }
}

function recruitScreenSubmit() {
    let submitScreen = document.getElementById("recruitScreenForm");
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("recruit").style.visibility = "visible";
    document.getElementById("question").style.visibility = "visible";
    document.getElementById("recruitScreen").style.visibility = "hidden";
    submitScreen.reset();
}

function question() {
    window.open("#","_self")
}