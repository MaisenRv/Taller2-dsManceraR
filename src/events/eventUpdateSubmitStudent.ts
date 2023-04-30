import isValid from "../utils/studentValidation.js";
import StudentPut from "../models/studentPutModel.js";
import updateStudent from "../services/updateStudent.js";
import clearTableStudents from "../utils/clearTableStudents.js";
import getAllStudents from "../services/getAllStudents.js";
import showStudents from "../utils/showStudents.js";
import token from "../connection/accessToken.js";

const btnUpdate = document.getElementById("btnActualizar") as HTMLButtonElement;
btnUpdate.addEventListener("click",()=>{
    const idStudentShow = document.getElementById("idStudentShow") as HTMLLabelElement;
    const idStudent = parseInt(localStorage.getItem("CurrentStudent")!);
    
    eventUpdateStudent(token,idStudent)
    localStorage.clear();
})

function eventUpdateStudent(token:string,idStudent:number) {
    const nombresEdit = document.getElementById("nombresEdit") as HTMLInputElement;
    const apellidosEdit = document.getElementById("apellidosEdit") as HTMLInputElement;
    const celularEdit = document.getElementById("celularEdit") as HTMLInputElement;
    const emailEdit = document.getElementById("emailEdit") as HTMLInputElement;
    const linkedinEdit = document.getElementById("linkedinEdit") as HTMLInputElement;
    const gitHubEdit = document.getElementById("gitHubEdit") as HTMLInputElement;

    if(isValid(nombresEdit)
       && isValid(apellidosEdit)
       && isValid(celularEdit)
       && isValid(emailEdit)
       && isValid(linkedinEdit)
       && isValid(gitHubEdit)
       ){

        const studentUpdated:StudentPut = {
            nombres: nombresEdit.value,
            apellidos: apellidosEdit.value,
            celular: parseInt(celularEdit.value),
            correo: emailEdit.value,
            linkedin: linkedinEdit.value,
            github: gitHubEdit.value
        }

        updateStudent(token,idStudent,studentUpdated).then(response=>{
            alert(response.message);
            clearTableStudents();
            getAllStudents(token).then(studentsData=> showStudents(studentsData));
        })
    }
}

export default eventUpdateStudent;

