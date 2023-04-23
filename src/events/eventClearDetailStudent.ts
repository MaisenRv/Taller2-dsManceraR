const buttonCloseDetail = document.getElementById("buttonCloseDetailStudent") as HTMLButtonElement;
const infoStudent = document.getElementById("info-student");

buttonCloseDetail.addEventListener("click",()=>{
    while(infoStudent!.hasChildNodes()){
       const node = infoStudent!.lastChild as Node;
       infoStudent!.removeChild(node);
    }
})