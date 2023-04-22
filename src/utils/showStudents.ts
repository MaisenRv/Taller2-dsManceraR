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
                            newTdState);

        tableBodyStudents.appendChild(newTrElement);
    });

}