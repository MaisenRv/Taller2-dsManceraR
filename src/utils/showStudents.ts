import StudentGet from "../models/studentGetModel.js";
import token from "../connection/accessToken.js";
import showStudentDetail from "./showStudentDetail.js";
import updateStatus from "../events/eventChagedStatusStudent.js";

const tableBodyStudents = document.getElementById("tableBodyStudents") as HTMLTableSectionElement;

export default function showStudents(studentsArray:StudentGet[]){
    studentsArray.forEach(student=>{
        const newTrElement = document.createElement("tr");

        // Campo ID
        const newThId = document.createElement("th");
        newThId.scope = "row";
        newThId.textContent = student.estudiante_id.toString();

        // Campo nombre
        const newTdName = document.createElement("td");
        newTdName.textContent = student.estudiante_nombres;
        
        // Campo apellido
        const newTdLasname = document.createElement("td");
        newTdLasname.textContent = student.estudiante_apellidos;

        // Campo correo
        const newTdEmail = document.createElement("td");
        newTdEmail.textContent = student.estudiante_correo;
        
        // Campo estado
        const newTdState = document.createElement("td");
        newTdState.textContent = student.estudiante_estado.toLowerCase();

        newTrElement.append(newThId,
                            newTdName,
                            newTdLasname,
                            newTdEmail,
                            newTdState,
                            createButtonsActions(student.estudiante_id,student.estudiante_estado));

        tableBodyStudents.appendChild(newTrElement);
    });

}

function createButtonsActions(idStudent:number,statusStudent:string):HTMLTableCellElement{
    const newTdButtonsActions = document.createElement("td");
    newTdButtonsActions.classList.add("text-center")

    // Boton para editar el estudiante
    const buttonEdit = document.createElement("button");
    buttonEdit.type = "button";
    buttonEdit.classList.add("btn","btn-secondary","mx-1");
    buttonEdit.textContent = "Editar"

    // Boton para cambiar el estado del estudiante
    const buttonChangeStatus = document.createElement("button");
    buttonChangeStatus.type = "button";
    let classButtonStatus = "";
    let textButtonStatus = "";
    if (statusStudent.toLowerCase() == "activo") {
        classButtonStatus = "btn-danger";
        textButtonStatus = "Desactivar";
    }else{
        classButtonStatus = "btn-success";
        textButtonStatus = "Activar"
    }
    buttonChangeStatus.classList.add("btn",classButtonStatus,"mx-1");
    buttonChangeStatus.textContent = textButtonStatus;
    // Cambio de estado
    buttonChangeStatus.addEventListener("click",()=> updateStatus(token,idStudent,statusStudent))

    // Boton detalle
    const buttonInfoStudent = document.createElement("button");
    buttonInfoStudent.type = "button";
    buttonInfoStudent.classList.add("btn","btn-info","mx-1");
    buttonInfoStudent.textContent = "Detalle";
    buttonInfoStudent.setAttribute("data-bs-toggle","modal");
    buttonInfoStudent.setAttribute("data-bs-target","#staticBackdrop");
    // Detalle del estudiante
    buttonInfoStudent.addEventListener("click",()=> showStudentDetail(token,idStudent));

    newTdButtonsActions.append(buttonEdit,buttonChangeStatus,buttonInfoStudent);   

    return newTdButtonsActions;
}