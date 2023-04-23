import isValid from "../utils/studentValidation.js";
import Student from "../models/studentPostModel.js";
import getAllStudents from "../controllers/getAllStudents.js";
import showStudents from "../utils/showStudents.js";
import createStudent from "../controllers/createStudent.js";
import clearTableStudents from "../utils/clearTableStudents.js"
import token from "../connection/accessToken.js";

const modal = document.getElementById("exampleModal") as HTMLDivElement;

const buttonSend = document.getElementById('enviar') as HTMLButtonElement;

buttonSend.addEventListener("click", () => {
    const typeDocumentStudent = document.getElementById('tipoIdentificacion') as HTMLSelectElement;
    const idStudent = document.getElementById('numeroIdentificacion') as HTMLInputElement;
    const nameStudent = document.getElementById('nombres') as HTMLInputElement;
    const lastnameStudent = document.getElementById('apellidos') as HTMLInputElement;
    const phoneNumberStudent = document.getElementById('celular') as HTMLInputElement;
    const emailStudent = document.getElementById('email') as HTMLInputElement;
    const linkedinStudent = document.getElementById('linkedin') as HTMLInputElement;
    const gitHubStudent = document.getElementById('gitHub') as HTMLInputElement;
    
    if (isValid(idStudent) 
        && isValid(nameStudent) 
        && isValid(lastnameStudent) 
        && isValid(phoneNumberStudent) 
        && isValid(emailStudent) 
        && isValid(linkedinStudent) 
        && isValid(gitHubStudent)) {
        
        const newStudent:Student = {
            tipoIdentificacion: parseInt(typeDocumentStudent.value),
            numeroIdentificacion: parseInt(idStudent.value),
            nombres: nameStudent.value,
            apellidos: lastnameStudent.value,
            celular: parseInt(phoneNumberStudent.value),
            correo: emailStudent.value,
            linkedin: linkedinStudent.value,
            github: gitHubStudent.value
        }        
        createStudent(newStudent,token).then(result=>{
            // console.log(result);
            // console.log(result.statusCode);
            
            if (result.statusCode) {
                alert(result.message);
            }else{
                alert(result.message);
                clearTableStudents();
                getAllStudents(token).then(studentsData=> showStudents(studentsData));
            }
        })
        
        
    }
});