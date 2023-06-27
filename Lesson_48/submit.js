const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password ");

form.addEventListener("submit",formHandler);

function formHandler(e){
    e.preventDefault();
    const userinfo = {
        name : name.value,
        email : email.value,
        password : password.value
    }
    console.log(userinfo);
    name.value = "";
    email.value = "";
    password.value = "";
}