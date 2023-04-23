import getStudent from "../controllers/getStudent.js";
import StudentGet from "../models/studentGetModel.js";

export default function showStudentDetail(token:string, idStudent:number){
    getStudent(token,idStudent).then(student=>{

        const titleModal = document.getElementById("staticBackdropLabel") as HTMLElement;
        titleModal.textContent = "Detalle del estudiante "+student.estudiante_nombres + " " + student.estudiante_apellidos;
        
        const infoStudentModal = document.getElementById("info-student") as HTMLElement;
        createListDataStudent(student,infoStudentModal)
    })
}

function createListDataStudent(studentData:StudentGet, listOutData:HTMLElement) {
    listOutData.appendChild(createLiElemtent("ID",studentData.estudiante_id));
    listOutData.appendChild(createLiElemtent("Nombre",studentData.estudiante_nombres));
    listOutData.appendChild(createLiElemtent("Apellido",studentData.estudiante_apellidos));
    listOutData.appendChild(createLiElemtent("Numero de identificacion",studentData.estudiante_numeroIdentificacion));
    listOutData.appendChild(createLiElemtent("Correo",studentData.estudiante_correo));
    listOutData.appendChild(createLiElemtent("Numero de celular",studentData.estudiante_celular));
    listOutData.appendChild(createLiElemtent("Estado",studentData.estudiante_estado));
    listOutData.appendChild(createLiElemtent("GitHub",studentData.estudiante_github));
    listOutData.appendChild(createLiElemtent("Linkedin",studentData.estudiante_linkedin));
    listOutData.appendChild(createLiElemtent("Fecha de creacion",studentData.estudiante_fechaCreacion));
}

function createLiElemtent(name:string,value:string|number|undefined):HTMLLIElement{
    const li = document.createElement("li");
    li.innerHTML = "<span>"+name+"<span/>";
    li.innerHTML += ": "+value;
    return li;
}