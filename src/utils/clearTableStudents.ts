const tableBodyStudents = document.getElementById("tableBodyStudents") as HTMLTableElement;

export default function clearTableStudents(){
    while (tableBodyStudents.hasChildNodes()) {
        const lastStudentChild = tableBodyStudents.lastChild as Node;
        tableBodyStudents.removeChild(lastStudentChild);
    }
}
