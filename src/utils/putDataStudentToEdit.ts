import getStudent from "../controllers/getStudent.js";
import eventUpdateStudent from "../events/eventUpdateSubmitStudent.js";

function putDataStudentToEdit(token:string, idStudent:number) {
    const idStudentShow = document.getElementById("idStudentShow") as HTMLLabelElement;
    const numberIdentificationShow = document.getElementById("numberIdentificationShow") as HTMLLabelElement;
    const nombresEdit = document.getElementById("nombresEdit") as HTMLInputElement;
    const apellidosEdit = document.getElementById("apellidosEdit") as HTMLInputElement;
    const celularEdit = document.getElementById("celularEdit") as HTMLInputElement;
    const emailEdit = document.getElementById("emailEdit") as HTMLInputElement;
    const linkedinEdit = document.getElementById("linkedinEdit") as HTMLInputElement;
    const gitHubEdit = document.getElementById("gitHubEdit") as HTMLInputElement;

    getStudent(token,idStudent).then(student=>{
        idStudentShow.textContent = "ID: " + student.estudiante_id.toString();
        numberIdentificationShow.textContent = "Numero de identificación: " + student.estudiante_numeroIdentificacion!.toString();
        nombresEdit.value = student.estudiante_nombres;
        apellidosEdit.value = student.estudiante_apellidos;
        celularEdit.value = student.estudiante_celular!;
        emailEdit.value = student.estudiante_correo;
        linkedinEdit.value = student.estudiante_linkedin!;
        gitHubEdit.value = student.estudiante_github!;
    })

    const btnUpdate = document.getElementById("btnActualizar") as HTMLButtonElement;
    btnUpdate.addEventListener("click",()=> eventUpdateStudent(token,idStudent));
}

export default putDataStudentToEdit;