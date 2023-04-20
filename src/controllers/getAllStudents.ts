async function getAllStudents(token:string){
    const header = new Headers();
    header.append("Authorization", "Bearer " + token)
    const request = {
        method: "GET",
        headers: header
    }
    const response = await fetch("https://apiestudiantes.maosystems.dev/estudiantes",request)
    const students = await response.json();
    return students.data   
}

export default getAllStudents;