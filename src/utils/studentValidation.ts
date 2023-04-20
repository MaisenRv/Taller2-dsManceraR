import StylesForm from "../styles/StylesForm.js";

export default function isValid(input:HTMLInputElement):Boolean {
    if (input.value == "") {
        StylesForm.alertInput(input);
        return false;
    }
    if(input.type == "number" && input.value.length < 5){
        // console.log("numeros");
        return false;
    }

    if(input.type == "tel" && input.value.length < 6){
        // console.log("telefonos");
        return false;
    }

    if (input.type == "email" && !input.value.includes("@") && !input.value.includes(".com")) {
        // console.log("correo");
        return false;
    }

    if (input.type == "url" && !input.value.startsWith("https://")) {
        // console.log("url");
        return false;
    }

    return true;

}