import StudentPut from "../models/studentPutModel.js";

async function updateStudent(token:string, idStudent:number ,updatedStudent:StudentPut) {
    const header = new Headers();

    header.append("Content-Type","application/json");
    header.append("Authorization", "Bearer " + token);
    const request = {
        method: "PUT",
        headers: header,
        body: JSON.stringify(updatedStudent)
    }

    const response = await fetch("https://apiestudiantes.maosystems.dev/estudiantes/"+idStudent, request);
    const data = await response.json();
    return data;
}
export default updateStudent;