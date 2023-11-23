function validateRegisterForm() {

	// The Login form
	var form = $("#registerForm");
	var errors = 0;

	// The Email field
	var email = form.find("[name='email']");
	var emptyEmail = (email.val() == null || email.val() == "");

	if (emptyEmail) {
		// show error message if it hasn't been shown already
		if (!email.hasClass("error")) {
			email.addClass("error");
			email.before("<p class='error-msg'>Please enter your email address.</p>");
		}
		errors++;
	} else {
		// remove error message
		if (email.hasClass("error")) {
			email.removeClass("error");
			email.prev().remove();
		}
	}

	// The Password field
	var password = form.find("[name='password']");
	var emptyPassword = (password.val() == null || password.val() == "");

	if (emptyPassword) {
		// show error message if it hasn't been shown already
		if (!password.hasClass("error")) {
			password.addClass("error");
			password.before("<p class='error-msg'>Please enter your password.</p>");
		}
		errors++;
	} else {
		// remove error message
		if (password.hasClass("error")) {
			password.removeClass("error");
			password.prev().remove();
		}
	}

	if (errors > 0) {
		return false;
	} else {
		return true;
	}
}

function validateLoginForm() {

	// The Login form
	var form = $("#loginForm");
	var errors = 0;

	// The Email field
	var email = form.find("[name='email']");
	var emptyEmail = (email.val() == null || email.val() == "");

	if (emptyEmail) {
		// show error message if it hasn't been shown already
		if (!email.hasClass("error")) {
			email.addClass("error");
			email.before("<p class='error-msg'>Please enter your email address.</p>");
		}
		errors++;
	} else {
		// remove error message
		if (email.hasClass("error")) {
			email.removeClass("error");
			email.prev().remove();
		}
	}

	// The Password field
	var password = form.find("[name='password']");
	var emptyPassword = (password.val() == null || password.val() == "");

	if (emptyPassword) {
		// show error message if it hasn't been shown already
		if (!password.hasClass("error")) {
			password.addClass("error");
			password.before("<p class='error-msg'>Please enter your password.</p>");
		}
		errors++;
	} else {
		// remove error message
		if (password.hasClass("error")) {
			password.removeClass("error");
			password.prev().remove();
		}
	}

	if (errors > 0) {
		return false;
	} else {
		return true;
	}
}

function validateUpdateAccountForm() {

	// The Login form
	var form = $("#user-details-form");
	var errors = 0;

	// The First Name field
	var firstName = form.find("[name='user_fname']");
	var emptyFirstName = (firstName.val() == null || firstName.val() == "");

	if (emptyFirstName) {
		// show error message if it hasn't been shown already
		if (!firstName.hasClass("error")) {
			firstName.addClass("error");
			firstName.before("<p class='error-msg'>Please enter your first name.</p>");
		}
		errors++;
	} else {
		// remove error message
		if (firstName.hasClass("error")) {
			firstName.removeClass("error");
			firstName.prev().remove();
		}
	}

	// The Last Name field
	var lastName = form.find("[name='user_lname']");
	var emptyLastName = (lastName.val() == null || lastName.val() == "");

	if (emptyLastName) {
		// show error message if it hasn't been shown already
		if (!lastName.hasClass("error")) {
			lastName.addClass("error");
			lastName.before("<p class='error-msg'>Please enter your last name.</p>");
		}
		errors++;
	} else {
		// remove error message
		if (lastName.hasClass("error")) {
			lastName.removeClass("error");
			lastName.prev().remove();
		}
	}

	if (errors > 0) {
		return false;
	} else {
		return true;
	}
}

function validateRequestForm() {
	// The Request form
	var form = $("#requestForm");
	var errors = 0;
	var button = form.find('button');

	// The Full Name field
	var name = form.find("[name='full_name']");
	var emptyName = (name.val() == null || name.val() == "");

	if (emptyName) {
		// show error message if it hasn't been shown already
		if (!name.hasClass("error")) {
			name.addClass("error");
			name.before("<p class='error-msg'>Please enter your name.</p>");
		}
		errors++;
	} else {
		// remove error message
		if (name.hasClass("error")) {
			name.removeClass("error");
			name.prev().remove();
		}
	}

	// The Email field
	var email = form.find("[name='email']");
	var emptyEmail = (email.val() == null || email.val() == "");

	if (emptyEmail) {
		// show error message if it hasn't been shown already
		if (!email.hasClass("error")) {
			email.addClass("error");
			email.before("<p class='error-msg'>Please enter your email address.</p>");
		}
		errors++;
	} else {
		// remove error message
		if (email.hasClass("error")) {
			email.removeClass("error");
			email.prev().remove();
		}
	}

	// The Space Type
	var spaceType = form.find("[name=space_request_property_type]");
	var emptySpaceType = (spaceType.val() == 0);

	if (emptySpaceType) {
		// show error message if it hasn't been shown already
		if (!spaceType.hasClass("error")) {
			spaceType.addClass("error");
			spaceType.before("<p class='error-msg'>Please select a space type.</p>");
		}
		errors++;
	} else {
		// remove error message
		if (spaceType.hasClass("error")) {
			spaceType.removeClass("error");
			spaceType.prev().remove();
		}
	}

	// Locations
	var locations = form.find(".selectize-input");
	var emptyLocations = (locations.children('div[data-value]').length == 0);

	if (emptyLocations) {
		// show error message if it hasn't been shown already
		if (!locations.hasClass("error")) {
			locations.addClass("error");
			locations.before("<p class='error-msg'>Please enter a suburb.</p>");
		}
		errors++;
	} else {
		// remove error message
		if (locations.hasClass("error")) {
			locations.removeClass("error");
			locations.prev().remove();
		}
	}

	if (errors > 0) {
		return false;
	} else {
		form.parent().html("<div class='loading'><div class='uil-ring-css' style='transform:scale(0.4);'><div></div></div></div>");

		return true;
	}
}

