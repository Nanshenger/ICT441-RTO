// Get form elements
const form = document.querySelector('#my-form');

// Get each input field in the form
const firstNameInput = form.querySelector('#first-name');
const lastNameInput = form.querySelector('#last-name');
const phoneInput = form.querySelector('#phone');
const genderInput = form.querySelector('#gender');
const enquiryInput = form.querySelector('#enquiry');


function Validate()
{
    // Get input values and trim whitespace
    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const genderValue = genderInput.value;
    const enquiryValue = enquiryInput.value.trim();

    // Regular expression for input validation
    const nameRegex = /^[a-zA-Z]+$/; // Accept only letters
    const phoneRegex = /^\d+$/; // Accept only numbers
    const genderRegex = /^(Male|Female)$/i; // Accept Male or Female, case-insensitive

    let isValid = true; // Switch to track form validity, default to true

    document.getElementById("fn").style.color = "Red";
    document.getElementById("ln").style.color = "Red";
    document.getElementById("pn").style.color = "Red";
    document.getElementById("gd").style.color = "Red";
    document.getElementById("eq").style.color = "Red";

    // Check firstName field
    if (firstNameValue === '') {
        document.getElementById("fn").innerHTML = "First Name: Please enter your first name.";
        isValid = false;
    } else if (!nameRegex.test(firstNameValue)) {
        document.getElementById("fn").innerHTML = "First Name: Please enter letters.";
        isValid = false;
    } else {
        document.getElementById("fn").innerHTML = "First Name:PASS";
        document.getElementById("fn").style.color = "Green";
    }

    // Check lastName field
    if (lastNameValue === '') {
        document.getElementById("ln").innerHTML = "Last Name: Please enter your last name.";
        isValid = false;
    } else if (!nameRegex.test(lastNameValue)) {
        document.getElementById("ln").innerHTML = "Last Name: Please enter letters.";
        isValid = false;
    } else {
        document.getElementById("ln").innerHTML = "Last Name:PASS";
        document.getElementById("ln").style.color = "Green";
    }

    // Check phone field
    if (phoneValue === '') {
        document.getElementById("pn").innerHTML =('Phone Number: Please enter your phone number.');
        isValid = false;
    } else if (!phoneRegex.test(phoneValue) || phoneValue.length < 8) {
        document.getElementById("pn").innerHTML =('Phone Number: Only numbers and must not be less than 8 digits.');
        isValid = false;
    } else {
        document.getElementById("pn").innerHTML ='Phone Number: PASS';
        document.getElementById("pn").style.color = "Green";
    }

    // Check gender field
    if (genderValue === '') {
        document.getElementById("gd").innerHTML = 'Gender: Please select your gender.';
        isValid = false;
    } else if (!genderRegex.test(genderValue)) {
        document.getElementById("gd").innerHTML = 'Invalid input for gender.';
        isValid = false;
    } else {
        document.getElementById("gd").innerHTML = 'Gender: PASS';
        document.getElementById("gd").style.color = "Green";
    }

    // Check enquiry field
    if (enquiryValue === '') {
        document.getElementById("eq").innerHTML = 'Enquiry: Please enter your enquiry.';
        isValid = false;
    } else if (enquiryValue.split(/\s+/).length > 150) {
        document.getElementById("eq").innerHTML = 'Enquiry: Your enquiry should be limited to 150 words.';
        isValid = false;
    } else {
        document.getElementById("eq").innerHTML = 'Enquiry: PASS';
        document.getElementById("eq").style.color = "Green";
    }

}



