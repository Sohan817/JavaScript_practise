console.clear();
// //get data
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err));

// //post data
// axios.post("https://jsonplaceholder.typicode.com/posts",{
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
// })
// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err));

// //update data
// axios.put("https://jsonplaceholder.typicode.com/posts/1",{
//     method: 'PUT',
//     body: JSON.stringify({
//       id : 1,
//       title: 'fooma',
//       body: 'barma',
//       userId: 1,
//     })
// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err));
// //update single data
// axios.patch("https://jsonplaceholder.typicode.com/posts/1",{
//     method: 'PATCH',
//     body: JSON.stringify({
//       title: 'This is changed',
//     })
// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err));

// //Delete data
// axios.delete("https://jsonplaceholder.typicode.com/posts/1",{
//     method: 'DELETE',
// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err));

//Using async and await 
const makeRequest = async (config) =>{
    return await axios(config);
};

//get Data 
const   getData =() =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err));
}
getData();

//post data 
function  postData(){
    makeRequest({
        url : "https://jsonplaceholder.typicode.com/posts",
        method: "post",
        data : JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
        }),
    })
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err));
}

postData()