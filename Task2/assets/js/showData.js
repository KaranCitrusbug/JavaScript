//Getting data from localstorage
const allUserData = JSON.parse(localStorage.getItem("task2Data"));

function viewData() {
  
  //Checking data are there or not  
  if (allUserData == null || allUserData.length === 0) {
    let headingTag = document.createElement("h1");
    headingTag.textContent = "No data found";
    let div = document.getElementById("data");
    let table = document.getElementById("userTable");
    table.style.display ="none";
    div.appendChild(headingTag);
    return false;
  }

  //Add a table in page

  for (let i = 0; i < allUserData.length; i++) {
    let tableRow = document.createElement("tr");

    let tableData1 = document.createElement("td");
    tableData1.textContent = allUserData[i].userName;
    tableRow.appendChild(tableData1);

    let tableData2 = document.createElement("td");
    tableData2.textContent = allUserData[i].email;
    tableRow.appendChild(tableData2);

    let tableData3 = document.createElement("td");
    tableData3.textContent = allUserData[i].address;
    tableRow.appendChild(tableData3);

    let tableData4 = document.createElement("td");
    tableData4.textContent = allUserData[i].gender;
    tableRow.appendChild(tableData4);

    let tableData5 = document.createElement("td");
    tableData5.textContent = allUserData[i].age;
    tableRow.appendChild(tableData5);

    let table = document.getElementById("userTable");
    table.appendChild(tableRow);
  }
}
