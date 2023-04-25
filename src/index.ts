import getAllStudents from "./controllers/getAllStudents.js";
import showStudents from "./utils/showStudents.js";

// Mi token
import token from "./connection/accessToken.js";
getAllStudents(token).then(studentsData=> showStudents(studentsData));

const btnCloseModalEditStudent = document.getElementById("btnCloseModalEditStudent");
btnCloseModalEditStudent!.addEventListener("click",()=>{
    localStorage.clear();
})