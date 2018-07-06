		// NAVIGATION //

// optimization and redundancy scripts //
	// toggleVisibility() //

	// Landing page scripts //
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

// optimization and redundancy scripts
// toggles the visibility of an element
function toggleVisibility(target, state) {
   document.getElementById(target).style.visibility = state;
}

// Landing page scripts
// hides all open menus
function hideEverything() {
	document.getElementById("logo").classList.remove("blurred");
	toggleVisibility("login", "visible");
	toggleVisibility("loginScreen", "hidden");
	toggleVisibility("recruit", "visible");
	toggleVisibility("recruitScreen", "hidden");
	toggleVisibility("about", "visible");
	toggleVisibility("aboutScreen", "hidden");
}

// loginScreen scripts
// opens loginScreen
function login() {
	document.getElementById("logo").classList.add("blurred");
	document.getElementById("loginScreenForm").reset();
	toggleVisibility("login", "hidden");
	toggleVisibility("recruit", "hidden");
	toggleVisibility("about", "hidden");
	toggleVisibility("loginScreen", "visible");
}

// checks if any of the fields in loginScreen are blank
function loginScreenValidation() {
	let username = document.getElementById("loginScreenUsernameField");
	let password = document.getElementById("loginScreenPasswordField");
	let submitButton = document.getElementById("loginScreenSubmit");
	if (username.value === null || username.value === "",
		password.value === null || password.value === "") {
		submitButton.style.color = "#7f7f7f";
	} else {
		submitButton.style.color = "#EF982E";
		loginScreenEnter();
		submitButton.onclick = function () {
			loginScreenSubmit()
		};
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
	let loginScreen = document.getElementById("loginScreenForm");
	document.getElementById("logo").classList.remove("blurred");
	toggleVisibility("login", "visible");
	toggleVisibility("recruit", "visible");
	toggleVisibility("about", "visible");
	toggleVisibility("loginScreen", "hidden");
	loginScreen.reset();
}

// recruitScreen scripts
// opens recruitScreen
function recruit() {
	let submitButton = document.getElementById("recruitScreenSubmit");
	document.getElementById("logo").classList.add("blurred");
	document.getElementById("recruitScreenForm").reset();
	submitButton.style.color = "#7f7f7f";
	toggleVisibility("login", "hidden");
	toggleVisibility("recruit", "hidden");
	toggleVisibility("about", "hidden");
	toggleVisibility("recruitScreen", "visible");
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
}

// closes strengthMeter
function strengthMeterHide() {
	let shape = document.getElementById("strengthMeterShapes");
	shape.className = "none";
	toggleVisibility("strengthMeter", "hidden");
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
	if (username.value === null || username.value === "",
		password.value === null || password.value === "",
		passwordRepeat.value === null || passwordRepeat.value === "") {
		submitButton.classList.add("gray");
		submitButton.classList.remove("orange");
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
	let recruitScreen = document.getElementById("recruitScreenForm");
	document.getElementById("logo").classList.remove("blurred");
	toggleVisibility("login", "visible");
	toggleVisibility("recruit", "visible");
	toggleVisibility("about", "visible");
	toggleVisibility("recruitScreen", "hidden");
	recruitScreen.reset();
}

// aboutScreen scripts
// opens aboutScreen
function about() {
	window.open("#","_self")
}