// fetch has replaced XMLHttpRequest
// global method for making Http request
// 2 way to call then, async.await

// + featch() is easy to use compare to XMLHttpRequest
//+ fetch() return a promise
//- return promise can only handle network error
//- does not support all the older browser

console.clear();

//Get data

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) =>{
    if(!res.ok){
        const message = `Error: ${res.status}`;
        throw new Error(message);
    }
    return res.json()
})
.then((res) =>console.log(res))
.catch((err) => console.log(err));

//Create Data
fetch("https://jsonplaceholder.typicode.com/posts",{
    method : 'POST',
    body : JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json',
      },
})
.then((res) =>{
    if(!res.ok){
        const message = `Error: ${res.status}`;
        throw new Error(message);
    }
    return res.json()
})
.then((res) =>console.log(res))
.catch((err) => console.log(err));

//Update data
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method : 'PUT',
    body : JSON.stringify({
        id : 1,
        title: 'fooma',
        body: 'barma',
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json',
      },
})
.then((res) =>{
    if(!res.ok){
        const message = `Error: ${res.status}`;
        throw new Error(message);
    }
    return res.json()
})
.then((res) =>console.log(res))
.catch((err) => console.log(err));

//Update Single data
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method : 'PATCH',
    body : JSON.stringify({
        title: 'This is Changed',
    }),
    headers: {
        'Content-type': 'application/json',
      },
})
.then((res) =>{
    if(!res.ok){
        const message = `Error: ${res.status}`;
        throw new Error(message);
    }
    return res.json()
})
.then((res) =>console.log(res))
.catch((err) => console.log(err));

//Delete data 
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method : 'DELETE'
})
.then((res) =>{
    if(!res.ok){
        const message = `Error: ${res.status}`;
        throw new Error(message);
    }
    return res.json()
})
.then((res) =>console.log(res))
.catch((err) => console.log(err));