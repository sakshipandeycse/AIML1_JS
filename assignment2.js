function addEmployee() {
    let id = document.getElementById("empId").value;
    let name = document.getElementById("empName").value;
    let salary = document.getElementById("empSalary").value;
    let dept = document.getElementById("empDept").value;

    // Validation
    if (id === "" || name === "" || salary === "" || dept === "") {
        alert("Please fill all fields!");
        return;
    }

    let table = document
        .getElementById("employeeTable")
        .getElementsByTagName("tbody")[0];

    let newRow = table.insertRow();

    newRow.insertCell(0).innerText = id;
    newRow.insertCell(1).innerText = name;
    newRow.insertCell(2).innerText = salary;
    newRow.insertCell(3).innerText = dept;

    // Clear inputs
    document.getElementById("empId").value = "";
    document.getElementById("empName").value = "";
    document.getElementById("empSalary").value = "";
    document.getElementById("empDept").value = "";
}