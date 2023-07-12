console.clear();
//event->onload(),onerror()
//property->response,responseText,responseType,responseURL,status,statusURL
//function->open(),send(),setRequestHeader()
function makeRequest(method,url){
    const xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.onload =()=>{
        let data = xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.onerror=()=>{
        console.log("Error is here");
    }
    xhr.send();
}

function makeRequest1(method,url,data){
    const xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.onload =()=>{
        let data = xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onerror=()=>{
        console.log("Error is here");
    }
    xhr.send(JSON.stringify(data));
}
//get data
const getData = ()=>{
    makeRequest("GET","https://jsonplaceholder.typicode.com/posts")
}
//send Data
const sendData = () =>{
    makeRequest1("POST","https://jsonplaceholder.typicode.com/posts",{
        title: 'foo',
        body: 'bar',
        userId: 1,
      });
}
//update data
const updateData = () =>{
    makeRequest1("PUT","https://jsonplaceholder.typicode.com/posts/1",{
        id : 1,
        title: 'foom',
        body: 'barm',
        userId: 1,
      });
}
//Update single data
const updateSingleData = () =>{
    makeRequest1("PATCH","https://jsonplaceholder.typicode.com/posts/1",{
        title: 'This is changed',
      });
}
//Delete Data
const deleteData = () =>{
    makeRequest1("DELETE","https://jsonplaceholder.typicode.com/posts/1")
}
getData();
sendData();
updateData();
updateSingleData();
deleteData();