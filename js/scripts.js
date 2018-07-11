		// NAVIGATION //

	  // global variables //

// optimization and redundancy scripts //
	 // toggleVisibility() //

	// landing page scripts //
	  // hideEverything() //	
	
	// loginScreen scripts //
		 // login() //
  // loginScreenValidation() //
	// loginScreenEnter() //
	// loginScreenSubmit() //

	// recruitScreen scripts //
		// recruit() //
	// passwordStrength() //
	// strengthMeterShow() //
	 // strengthMeterHide //
	// passwordMatch() //
	// recruitScreenValidation() //
	// recruitScreenEnter() //
	// recruitScreenSubmit() //

	// aboutScreen scripts //
		// about() //

// global variables
let logo = document.getElementById("logo");
let login = document.getElementById("login");
let loginScreen = document.getElementById("loginScreen");
let loginScreenForm = document.getElementById("loginScreenForm");
let recruit = document.getElementById("recruit");
let recruitScreen = document.getElementById("recruitScreen");
let recruitScreenForm = document.getElementById("recruitScreenForm");
let strengthMeter = document.getElementById("strengthMeter");
let about = document.getElementById("about");


// optimization and redundancy scripts
// toggles the visibility of an element
function toggleVisibility(target, state) {
   document.getElementById(target).style.visibility = state;
}


// landing page scripts
// hides all open menus
function hideEverything() {
	logo.classList.remove("blurred");
	// checks if loginScreen is open
	if (loginScreen.style.visibility === "visible") {
		toggleVisibility("login", "visible");
		login.classList.add("intoExistence");
		toggleVisibility("loginScreen", "hidden");
		loginScreen.classList.remove("intoExistence");
		toggleVisibility("recruit", "visible");
		recruit.classList.add("intoExistence");
		toggleVisibility("about", "visible");
		about.classList.add("intoExistence");
	//	checks if recruitScreen is open
	} else if (recruitScreen.style.visibility === "visible") {
		toggleVisibility("login", "visible");
		login.classList.add("intoExistence");
		toggleVisibility("recruit", "visible");
		recruit.classList.add("intoExistence");
		toggleVisibility("recruitScreen", "hidden");
		recruitScreen.classList.remove("intoExistence");
		toggleVisibility("about", "visible");
		about.classList.add("intoExistence");
	//	checks if aboutScreen is open
	} else {	
		toggleVisibility("login", "visible");
		login.classList.add("intoExistence");
		toggleVisibility("recruit", "visible");
		recruit.classList.add("intoExistence");
		toggleVisibility("about", "visible");
		about.classList.add("intoExistence");
		// toggleVisibility("aboutScreen", "hidden");
		// about.classList.add("intoExistence");
	}
}


// loginScreen scripts
// opens and resets loginScreen
function loginScreenOpen() {
	loginScreenForm.reset();
	logo.classList.add("blurred");
	toggleVisibility("login", "hidden");
	login.classList.remove("intoExistence");
	toggleVisibility("recruit", "hidden");
	recruit.classList.remove("intoExistence");
	toggleVisibility("about", "hidden");
	about.classList.remove("intoExistence");
	toggleVisibility("loginScreen", "visible");
	loginScreen.classList.add("intoExistence");
}

// checks if any of the fields in loginScreen are blank
// and if the password is at least 6 characters long
function loginScreenValidation() {
	let username = document.getElementById("loginScreenUsernameField");
	let password = document.getElementById("loginScreenPasswordField");
	let submitButton = document.getElementById("loginScreenSubmit");
	// checks if any of the fields are empty
	if (username.value === null || username.value === "",
		password.value === null || password.value === "") {
		submitButton.classList.add("gray");
		submitButton.classList.remove("orange");
	//	checks if the password is at least 6 characters long
	} else if (password.value.length < 6){
		submitButton.classList.add("gray");
		submitButton.classList.remove("orange");
	} else {
		submitButton.classList.add("orange");
		submitButton.classList.remove("gray");
		loginScreenEnter();
		submitButton.onclick = function () {
			loginScreenSubmit()
		};
	}
}

// toggles the "Remember me" indicator
function rememberMe() {
	let box = document.getElementById("rememberMeCheckbox");
	if (box.classList.contains("empty")) {
		box.classList.add("accepted");
		box.classList.remove("empty");
	} else {
		box.classList.add("empty");
		box.classList.remove("accepted");
	}
}

// closes loginScreen using the keyboard
function loginScreenEnter() {
	if (event.keyCode === 13) {
		loginScreenSubmit();
	}
}

// closes loginScreen
function loginScreenSubmit() {
	logo.classList.remove("blurred");
	toggleVisibility("login", "visible");
	login.classList.add("intoExistence");
	toggleVisibility("recruit", "visible");
	recruit.classList.add("intoExistence");
	toggleVisibility("about", "visible");
	about.classList.add("intoExistence");
	toggleVisibility("loginScreen", "hidden");
	loginScreen.classList.remove("intoExistence");
}


// recruitScreen scripts
// opens and resets recruitScreen
function recruitScreenOpen() {
	recruitScreenForm.reset();
	logo.classList.add("blurred");
	toggleVisibility("login", "hidden");
	login.classList.remove("intoExistence");
	toggleVisibility("recruit", "hidden");
	recruit.classList.remove("intoExistence");
	toggleVisibility("about", "hidden");
	about.classList.remove("intoExistence");
	toggleVisibility("recruitScreen", "visible");
	recruitScreen.classList.add("intoExistence");
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
	toggleVisibility("strengthMeter", "visible");
	strengthMeter.classList.add("intoExistence");
}

// closes strengthMeter
function strengthMeterHide() {
	let shape = document.getElementById("strengthMeterShapes");
	shape.className = "none";
	toggleVisibility("strengthMeter", "hidden");
	strengthMeter.classList.remove("intoExistence");
}

// checks if the passwords in recruitScreen match
function passwordMatch() {
	let password = document.getElementById("recruitScreenPasswordField");
	let passwordRepeat = document.getElementById("recruitScreenPasswordRepeatField");
	if (password.value !== passwordRepeat.value) {
		passwordRepeat.style.color = "#EF2E2E";
	} else {
		passwordRepeat.style.color = "#24B936";
			recruitScreenValidation();
	}
}

// checks if any of the fields in recruitScreen are blank
// and if the password is at least 6 characters long
function recruitScreenValidation() {
	let username = document.getElementById("recruitScreenUsernameField");
	let password = document.getElementById("recruitScreenPasswordField");
	let passwordRepeat = document.getElementById("recruitScreenPasswordRepeatField");
	let submitButton = document.getElementById("recruitScreenSubmit");
    // checks if any of the fields are empty
	if (username.value === null || username.value === "",
		password.value === null || password.value === "",
		passwordRepeat.value === null || passwordRepeat.value === "") {
		submitButton.classList.add("gray");
		submitButton.classList.remove("orange");
	//	checks if the password is at least 6 characters long
	} else if (password.value.length < 6){
		submitButton.classList.add("gray");
		submitButton.classList.remove("orange");
	} else {
		submitButton.classList.add("orange");
		submitButton.classList.remove("gray");
		recruitScreenEnter();
		submitButton.onclick = function () {
			recruitScreenSubmit()
		};
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
	logo.classList.remove("blurred");
	toggleVisibility("login", "visible");
	login.classList.add("intoExistence");
	toggleVisibility("recruit", "visible");
	recruit.classList.add("intoExistence");
	toggleVisibility("about", "visible");
	about.classList.add("intoExistence");
	toggleVisibility("recruitScreen", "hidden");
	recruitScreen.classList.remove("intoExistence");
}


// aboutScreen scripts
// opens aboutScreen
function aboutScreenOpen() {
	window.open("#","_self")
}