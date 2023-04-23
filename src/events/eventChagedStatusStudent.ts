import changeStatusStudent from "../controllers/changeStatusStudent.js";
import clearTableStudents from "../utils/clearTableStudents.js";
import showStudents from "../utils/showStudents.js";
import getAllStudents from "../controllers/getAllStudents.js";

function updateStatus(token:string, idStudent:number,status:string){
    changeStatusStudent(token,idStudent,status).then(response=>{
        alert(response.message)
        clearTableStudents();
        getAllStudents(token).then(students => showStudents(students));
    })
}

export default updateStatus;