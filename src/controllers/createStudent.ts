import StudentPost from "../models/studentPostModel";

async function createStudent(student:StudentPost, token:string) {
    const header = new Headers();
    header.append("Content-Type","application/json")
    header.append("Authorization", "Bearer " + token)
    const request = {
        method: "POST",
        headers: header,
        body: JSON.stringify(student)
    }
    const response = await fetch("https://apiestudiantes.maosystems.dev/estudiantes",request)
    const data = await response.json();
    return data;
}

export default createStudent;