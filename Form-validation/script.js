const nameError = document.querySelector('#js-name-error');
const numberError = document.querySelector('#js-number-error');
const emailError = document.querySelector('#js-email-error');
const messageError = document.querySelector('#js-message-error');
const btn = document.querySelector('#js-btn');

function validateName(){
    let nameValue  = document.querySelector('#js-name').value;
    if(nameValue.length == 0){
        nameError.innerHTML = 'Please enter name';
        return false;
    }
    if(!nameValue.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = "";
    return true;
}

function validateNumber(){
    let numberValue = document.querySelector('#js-number').value;
    if(numberValue.length == 0){
        numberError.innerHTML = 'Enter 10 digit number';
        return false;
    }
    if(numberValue.length !== 10){
        numberError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }
    if(!numberValue.match(/^[0-9]{10}*$/)){
        numberError.innerHTML = 'Numbre required';
        return false;
    }
    numberError.innerHTML = '';
    return true;
}

function validateEmail(){
    let emailValue = document.querySelector('#js-email').value;
    if(emailValue.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(emailValue.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML= '';
    return true;

}

function validateMaessage(){
    let messageValue = document.querySelector('#js-message');
    let required = 30;
    let left = required - messageError.length;
    if(left > 0){
        messageError.innerHTML = left + "more characters required";
        return false;
    }
    messageError.innerHTML = "";
    return true;
}

function validateForm(){
    if(!validateName() || !validateNumber() || !validateEmail() || !validateMaessage()){
        alert("Please fix the error to submit!");
        return false;
    }
    else{
        alert("Form submitted succesfully");
        return true;
    }
}