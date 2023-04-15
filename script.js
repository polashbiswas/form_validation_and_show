
const btn = document.getElementById("btn_id");
let employees = [];
let nextId = 1;

btn.addEventListener("click", (event) => {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const age = document.getElementById("age").value;
    addToList(name, profession, age);
});

function addToList(name, profession, age) {

    let message = document.getElementById("message");

    if (!name || !profession || !age) {
        message.innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !";
        message.style.color = "red";
        return;
    }

    let employeeDetails = { id: nextId++, name, profession, age };
    employees.push(employeeDetails);
    //console.log(employees);
    let employeList = document.getElementById("employe-list");
    let empDetailsDivTag = document.createElement("div");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("class", "dlt");
    // empDetailsDivTag.setAttribute("class", "listDiv")
    empDetailsDivTag.innerHTML = `  <p class = "inputList"><span>${employeeDetails.id}.</span>
                                    <span>Name:${employeeDetails.name} </span>
                                    <span>Profession:${employeeDetails.profession} </span>
                                    <span>Age:${employeeDetails.age}</span></p>`;
    //console.log(empDetailsDivTag.innerHTML);
    empDetailsDivTag.appendChild(deleteButton);
    employeList.appendChild(empDetailsDivTag);
    //document.getElementById("employe-list").appendChild(liTag);
    deleteButton.onclick = function () {
        employees = employees.filter(e => e.id !== employeeDetails.id);
        empDetailsDivTag.remove();
    };

    message.innerHTML = "Success : Employee Added!";
    message.style.color = "green";

    let form = document.getElementById("formId");
    form.reset();




}
