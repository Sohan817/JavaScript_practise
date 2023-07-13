// fetch has replaced XMLHttpRequest
// global method for making Http request
// 2 way to call then, async.await

// + featch() is easy to use compare to XMLHttpRequest
//+ fetch() return a promise
//- return promise can only handle network error
//- does not support all the older browser

const makeRequest = async(url,config) =>{
    const res = await fetch(url,config);

    if(!res.ok){
        const message = `Error ${res.status}`;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
    
}
function getData(){
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>console.log(res))
    .catch((err) => console.log(err));
}
getData();

//send Data
function sendData(){
    makeRequest("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json',
        },
    })
    .then((res)=>console.log(res))
    .catch((err) => console.log(err));
}
sendData();

//update data 
function updateData(){
    makeRequest("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'PUT',
        body: JSON.stringify({
            id : 1,
          title: 'fooma',
          body: 'barma',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json',
        },
    })
    .then((res)=>console.log(res))
    .catch((err) => console.log(err));
}
updateData();

//Update Single Data
function updtaeSingleData(){
    makeRequest("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'PATCH',
        body: JSON.stringify({
          title: 'This is changed',
        }),
        headers: {
          'Content-type': 'application/json',
        },
    })
    .then((res)=>console.log(res))
    .catch((err) => console.log(err));
}
updtaeSingleData();

//Delete Data
function dleteData(){
    makeRequest("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'DELETE',
    })
    .then((res)=>console.log(res))
    .catch((err) => console.log(err));
}
dleteData();

