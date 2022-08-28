//input element value calculation
function getInputElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

//text element value

function getTextElementValueById(textElementId){
const textElement = getElementById(textElementId);
const textElemntValueString = textElement.innerText;
const textElementValue = parseFloat(textElemntValueString);
return textElementValue;
}

//set textelement value to the text element
function setTextElementValue(texElementId,texElementValue){
    const texElement = document.getElementById(texElementId);
    texElement.innerText = texElementValue;
}



