import StudentGet from "../models/studentGetModel";

async function getAllStudents(token:string):Promise<StudentGet[]>{
    const header = new Headers();
    header.append("Authorization", "Bearer " + token)
    const request = {
        method: "GET",
        headers: header
    }
    const response = await fetch("https://apiestudiantes.maosystems.dev/estudiantes",request)
    const students = await response.json();
    
    const studentsArray:StudentGet[] = [];
    students.data.forEach((studentFromAPI:StudentGet) => {
        const dataStudent:StudentGet ={
            estudiante_nombres: studentFromAPI.estudiante_nombres,
            estudiante_apellidos: studentFromAPI.estudiante_apellidos,
            estudiante_correo: studentFromAPI.estudiante_correo,
            estudiante_estado: studentFromAPI.estudiante_estado,
            estudiante_id: studentFromAPI.estudiante_id
        }
        studentsArray.push(dataStudent);
    });
    return studentsArray;
}

export default getAllStudents;