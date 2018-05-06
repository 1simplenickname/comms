    // NAVIGATION //
// loginScreen scripts //
        // login() //
    // loginScreenEnter() //
    // loginScreenSubmit() //
// recruitScreen scripts //
        // recruit() //
    // passwordStrength() //
    // strengthMeterShow() //
     // strengthMeterHide //
        // passwordMatch() //
        // cantBeBlank() //
    // recruitScreenEnter() //
    // recruitScreenSubmit() //
// questionScreen scripts //
        // question() //

// loginScreen scripts
// opens loginScreen
function login() {
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("recruit").style.visibility = "hidden";
    document.getElementById("question").style.visibility = "hidden";
    document.getElementById("loginScreen").style.visibility = "visible";
}

// closes loginScreen using the keyboard
function loginScreenEnter() {
    if (event.keyCode === 13) {
        loginScreenSubmit();
    }
}

// closes loginScreen
function loginScreenSubmit() {
    let loginScreen = document.getElementById("loginScreenForm");
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("recruit").style.visibility = "visible";
    document.getElementById("question").style.visibility = "visible";
    document.getElementById("loginScreen").style.visibility = "hidden";
    loginScreen.reset();
}

// recruitScreen scripts
// opens recruitScreen
function recruit() {
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("recruit").style.visibility = "hidden";
    document.getElementById("question").style.visibility = "hidden";
    document.getElementById("recruitScreen").style.visibility = "visible";
}

// checks if the password in recruitScreen is secure
function passwordStrength() {
    let password = document.getElementById("recruitScreenPasswordField");
    let shape = document.getElementById("strengthMeterShapes");
    let content = document.getElementById("strengthMeterContent");
    let strength = 0;
    // checks if the password contains any letters
    if  (password.value.match(/[a-z][a-z]+/)) {
        strength += 1
    }
    // checks if the password contains any uppercase letters
    if  (password.value.match(/[A-Z][A-Z]+/)) {
        strength += 1
    }
    // checks if the password contains any numbers
    if  (password.value.match(/[0-9][0-9]+/)) {
        strength += 1
    }
    // checks if the password contains any special characters
    if (password.value.match(/[!"#$%&'()*+,./:;<=>?@^_`|~]/)) {
        strength += 1
    }
    // checks if the password is at least 6 characters long
    if (password.value.length > 5) {
        strength += 1
    }
    // checks if the password is at least 8 characters long
    if (password.value.length > 7) {
        strength += 1
    }
    switch(strength) {
        // very weak password
        case 0:
            password.style.color = "#EF2E2E";
            shape.className = "veryWeak";
            content.style.lineHeight = "30px";
            content.innerHTML = "VERY \ WEAK";
            break;
        // weak password
        case 2:
            password.style.color = "#EF7E2E";
            shape.className = "weak";
            content.style.lineHeight = "60px";
            content.innerHTML = "WEAK";
            break;
        // strong password
        case 4:
            password.style.color = "#EED82E";
            shape.className = "strong";
            content.style.lineHeight = "60px";
            content.innerHTML = "STRONG";
            break;
        // very strong password
        case 6:
            password.style.color = "#24B936";
            shape.className = "veryStrong";
            content.style.lineHeight = "30px";
            content.innerHTML = "VERY \ STRONG";
            break;
    }
}

// opens strengthMeter
function strengthMeterShow() {
    let shape = document.getElementById("strengthMeterShapes");
    shape.className = "veryWeak";
    document.getElementById("strengthMeter").style.visibility = "visible";
}

// closes strengthMeter
function strengthMeterHide() {
    let shape = document.getElementById("strengthMeterShapes");
    shape.className = "none";
    document.getElementById("strengthMeter").style.visibility = "hidden";
}

// checks if the passwords in recruitScreen match
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

// checks if any of the fields in recruitScreen are blank
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

// closes recruitScreen using the keyboard
function recruitScreenEnter() {
    if (event.keyCode === 13) {
        recruitScreenSubmit();
    }
}

// closes recruitScreen
function recruitScreenSubmit() {
    let submitScreen = document.getElementById("recruitScreenForm");
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("recruit").style.visibility = "visible";
    document.getElementById("question").style.visibility = "visible";
    document.getElementById("recruitScreen").style.visibility = "hidden";
    submitScreen.reset();
}

// questionScreen scripts
// opens questionScreen
function question() {
    window.open("#","_self")
}