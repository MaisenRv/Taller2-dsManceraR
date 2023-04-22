import getAllStudents from "../controllers/getAllStudents.js";
import showStudents from "../utils/showStudents.js";

// Mi token
import token from "../connection/accessToken.js";

window.addEventListener("load",()=>{
    getAllStudents(token).then(studentsData=> showStudents(studentsData));
})