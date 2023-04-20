import StylesForm from "../styles/StylesForm.js";

export default function isValid(input:HTMLInputElement):Boolean {
    if (input.value == "") {
        StylesForm.alertInput(input);
        return false;
    }
    if(input.type == "number" && input.value.length < 5){
        return false;
    }

    if(input.type == "tel" && input.value.length < 6){
        return false;
    }

    if (input.type == "email" && !input.value.includes("@") || !input.value.includes(".com")) {
        return false;
    }

    if (input.type == "url" && !input.value.startsWith("https://")) {
        return false;
    }

    return true;

}