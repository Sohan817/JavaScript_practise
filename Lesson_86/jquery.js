//ajax -> asynchronous js and xml

console.clear();
const makeRequest = async(url,method,data) =>{
        try{
            const result = await $.ajax({
                url : url,
                method : method,
                data : data,
            });
            return result;
        }catch(err){
            console.log(err);
            }
}

//get data
const getData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts',"GET")
    .then((res)=>console.log(res))
}
getData()
//post data
const createData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts',"POST",{
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
    .then((res)=>console.log(res))
}
createData()

//update Data
const updateData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',"PUT",{
        id : 1,
        title: 'fooma',
        body: 'barma',
        userId: 1,
      })
    .then((res)=>console.log(res))
}
updateData()

//delete Data
const deleteData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',"DELETE")
    .then((res)=>console.log(res))
}
deleteData()
