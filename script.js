let form = document.getElementById("Form");
let submitbtn = document.getElementById("submit-btn");
let email = document.getElementById("Email");
let errorMessage = document.getElementById("error");
form.addEventListener("submit", function(event){
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
    if(!email.value){
        event.preventDefault();
        errorMessage.textContent="Whoops! It looks like you forgot to add your email";
    }
    else if(!regexMatch){
        event.preventDefault();
        errorMessage.textContent="Please provide a valid email address";
    }
    else
    errorMessage="";
})