
async function changeStatusStudent(token:string, idStudent:number, status:string){
    const header = new Headers();
    header.append("Content-Type","application/json")
    header.append("Authorization", "Bearer " + token);

    let statusChaged:string = "";
    if(status.toLowerCase() == "activo"){
        statusChaged = "Inactivo";
    }else{
        statusChaged = "Activo";
    }
    
    const myBody = {estado: statusChaged}
    const request = {
        method:"PUT",
        headers: header,
        body:JSON.stringify(myBody)
    }

    const response = await fetch("https://apiestudiantes.maosystems.dev/estudiantes/estado/"+idStudent,request);
    const data = await response.json();
    return data;
}

export default changeStatusStudent;