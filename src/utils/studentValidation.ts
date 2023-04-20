import StylesForm from "../styles/StylesForm.js";

export default function isValid(input:HTMLInputElement):Boolean {
    if (input.value == "") {
        StylesForm.alertInput(input);
        return false;
    }
    if(input.type == "number" && input.value.length < 5){
        // console.log("numeros");
        alert("El numero de identificacion debe tener mas de 5 numeros");
        return false;
    }

    if(input.type == "tel" && input.value.length < 6){
        // console.log("telefonos");
        alert("El numero de telefono debe tener mas de 6 numeros");
        return false;
    }

    if (input.type == "email" && !input.value.includes("@") && !input.value.includes(".com")) {
        // console.log("correo");
        alert("El correo debe contener los caracteres @ y '.com' para que sea valido");
        return false;
    }

    if (input.type == "url" && !input.value.startsWith("https://")) {
        // console.log("url");
        alert("Los links deben contener 'https://' para que sean validos");
        return false;
    }

    return true;

}