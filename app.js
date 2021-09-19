// For the Mobile menu

function showMenu() {
  let allLinks = document.getElementById("mobileLinks");
  if (allLinks.style.display === "none") {
    allLinks.style.display = "block";
  } else {
    allLinks.style.display = "none";
  }
}

// For the error text on input fields

function checkError() {
  let errorText = document.getElementById("error-text");
  let emailField = document.getElementById("email").value;
  let input = document.getElementById("email");
  // Do a RegExp for the email address
  // adedayotimilehin10@gmail.com
  let re = /\S+@\S+\.\S+/;
  let check = re.test(emailField);
  if (emailField !== "" && check) {
    errorText.style.color = "green";
    input.style.border = "1px solid inherit"
    document.getElementById("email").value = "";
    errorText.innerHTML = "Email Received Successfully!";
  } else if (emailField === "") {
    errorText.style.color = "red";
    input.style.border = "1px solid red";
    errorText.innerHTML = "Please fill in your email address.";
  } else {
    errorText.style.color = "red";
    input.style.border = "1px solid red";
    errorText.innerHTML = "Please check your email address.";
  }
}

//for the error text in the callout section
function checkInputError() {
  let errorText = document.getElementById("error");
  let emailField = document.getElementById("emailText").value;
  let input = document.getElementById("emailText");
  // Do a RegExp for the email address
  // adedayotimilehin10@gmail.com
  let re = /\S+@\S+\.\S+/;
  let check = re.test(emailField);
  if (emailField !== "" && check) {
    errorText.style.color = "skyblue";
    input.style.border = "1px solid white";
    document.getElementById("emailText").value = "";
    errorText.innerHTML = "Email Received Successfully!";
  } else if (emailField === "") {
    errorText.style.color = "white";
    input.style.border = "1px solid red";
    errorText.innerHTML = "Please fill in your email address.";
  } else {
    errorText.style.color = "white";
    input.style.border = "1px solid red";
    errorText.innerHTML = "Please check your email address.";
  }
}
