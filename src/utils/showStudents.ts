import StudentGet from "../models/studentGetModel.js";

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
        newTdState.textContent = student.estudiante_estado;

        newTrElement.append(newThId,
                            newTdName,
                            newTdLasname,
                            newTdEmail,
                            newTdState,
                            createButtonsActions());

        tableBodyStudents.appendChild(newTrElement);
    });

}

function createButtonsActions():HTMLTableCellElement{
    const newTdButtonsActions = document.createElement("td");

    const buttonEdit = document.createElement("button");
    buttonEdit.type = "button";
    buttonEdit.classList.add("btn","btn-secondary","mx-1");
    buttonEdit.textContent = "Editar"

    const buttonChangeStatus = document.createElement("button");
    buttonChangeStatus.type = "button";
    buttonChangeStatus.classList.add("btn","btn-danger","mx-1");
    buttonChangeStatus.textContent = "Desactivar";

    const buttonInfoStudent = document.createElement("button");
    buttonInfoStudent.type = "button";
    buttonInfoStudent.classList.add("btn","btn-info","mx-1");
    buttonInfoStudent.textContent = "Detalle";

    newTdButtonsActions.append(buttonEdit,
                                buttonChangeStatus,
                                buttonInfoStudent);   

    return newTdButtonsActions;
}