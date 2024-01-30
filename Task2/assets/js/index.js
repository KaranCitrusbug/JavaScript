let allUserData = JSON.parse(localStorage.getItem("task2Data")) || [];

//getting data from user and validate
function valiDate() {
  
  //Name input
  let userName = prompt("Enter your name:");
  while (userName.trim() === "") {
    alert("*Please enter your name");
    userName = prompt("Enter your name:");
  }

  //Email input
  const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;

  let email = prompt("Enter your email");
  while (email.trim() === "" || !emailRegex.test(email)) {
    alert("*Please enter your valid email");
    email = prompt("Enter your email");
  }

  //Address input
  let address = prompt("Enter your address");
  while (address.trim() === "") {
    alert("Please enter your address");
    address = prompt("*Please Enter your address");
  }

  //Gender input
  let gender = prompt("Select your gender: Male, Female, Other")
  while (
    gender.trim() === "" ||
    (gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female" && gender.toLowerCase() !== "other")
  ) {
    alert("Select your gender: Male, Female, Other");
    gender = prompt("*Please enter your Gender");
  }

  //Age input
  let age = Number(prompt("Enter your age"));

  while (isNaN(age) || age == 0 || age < 0 || age > 100) {
    alert("Enter a valid age");
    age = prompt("Enter your age: ");
  }

  //Data object
  let userData = {
    userName: userName,
    email: email,
    address: address,
    gender: gender,
    age: age,
  };

  //Data store in localstorege
  allUserData.push(userData);
  let storeData = JSON.stringify(allUserData);
  localStorage.setItem("task2Data", storeData);
  return true;
}

function pageData() {
  if (valiDate()) {
    location.href = "showData.html";
  } else {
    alert("Please try again");
  }
}
