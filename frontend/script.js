const API =
"http://localhost:5000/students";
const div = document.getElementById("students");

div.innerHTML += `
<div class="student-card">

    <h3>${students.name}</h3>

    <p>
        <strong>Email:</strong>
        ${students.email}
    </p>

    <p>
        <strong>Course:</strong>
        ${students.course}
    </p>

    <button class="delete-btn">
        Delete
    </button>

</div>
`;
document
.getElementById("studentForm")
.addEventListener("submit", async(e)=>{

 e.preventDefault();

 const student = {

  name:
  document.getElementById("name").value,

  email:
  document.getElementById("email").value,

  course:
  document.getElementById("course").value
 };

 await fetch(API,{

  method:"POST",

  headers:{
   "Content-Type":"application/json"
  },

  body:JSON.stringify(student)
 });

 loadStudents();

 e.target.reset();
});

async function loadStudents() {

    const res = await fetch(
        "http://localhost:5000/students"
    );

    const students = await res.json();

    const div =
    document.getElementById("students");

    div.innerHTML = "";

    students.forEach(students => {

        div.innerHTML += `
        <div class="student-card">

            <h3>${students.name}</h3>

            <p>
                <strong>Email:</strong>
                ${students.email}
            </p>

            <p>
                <strong>Course:</strong>
                ${students.course}
            </p>

            <button class="delete-btn">
                Delete
            </button>

        </div>
        `;
    });
}

loadStudents();