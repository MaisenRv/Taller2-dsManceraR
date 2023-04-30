import StudentGet from "../models/studentGetModel";

async function getStudent(token:string, idStudent:number):Promise<StudentGet> {
    const header = new Headers();
    header.append("Authorization", "Bearer " + token);

    const request = {
        method:"GET",
        headers:header
    }

    const response = await fetch("https://apiestudiantes.maosystems.dev/estudiantes/"+idStudent, request);
    const data = await response.json();
    const student:StudentGet = data.data[0];
    
    return student;
}

export default getStudent;