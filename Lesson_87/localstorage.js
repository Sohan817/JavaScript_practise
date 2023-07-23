//Web storage API-allow us to store and read data in browser
//Web storage API-localStorage,sessionStorage
//lovalStorage-store,read update and remove data
//No expeiry date-data never lost even if the the browser closed.

//localStorage store data as key value pair --string

//set data-setItem(key,value)

// localStorage.setItem("usersName","Shohan");
// localStorage.setItem("password","012345");

// //get dat -getItem(key)

// const userName = localStorage.getItem("usersName");
// const userPassword = localStorage.getItem("password");
// console.log(userName,userPassword);

// //remove item-removeItem(key);
// localStorage.removeItem("usersName");
// localStorage.removeItem("password");

// // set and get array value

// //set data 
// const countries = ['Asustralia','Bangladesh','India'];

// localStorage.setItem("countries",JSON.stringify(countries));

// //get data
// const countriesName = JSON.parse(localStorage.getItem("countries"));

// console.log(countriesName);
