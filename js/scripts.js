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

// function passwordStrength() {
//     let password = String(document.getElementById("signupScreenPasswordField"));
//     let passwordField = document.getElementById("signupScreenPasswordField");
//     let passwordRepeatField = document.getElementById("signupScreenPasswordRepeatField");
//     let strength = 0;
//
//     if  (password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
//         strength += 1;
//     }
//     if (password.match(/[!?@£$%^&*()~<>]+/)) {
//         strength += 1;
//     }
//     if (password.length > 6) {
//         strength += 1;
//     }
//
//     switch(strength) {
//         // very weak password
//         case 0:
//             passwordField.style.color = "red";
//             passwordRepeatField.style.color = "red";
//             break;
//         // weak password
//         case 1:
//             passwordField.style.color = "orange";
//             passwordRepeatField.style.color = "orange";
//             break;
//         // strong password
//         case 2:
//             passwordField.style.color = "yellow";
//             passwordRepeatField.style.color = "yellow";
//             break;
//         // very strong password
//         case 3:
//             passwordField.style.color = "green";
//             passwordRepeatField.style.color = "green";
//             break;
//     }
// }