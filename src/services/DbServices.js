const axios = require('axios');

const baseUrl='http://localhost:3000';
export async function getAllProducts(){
    return await axios.get(baseUrl + "/products")
}
export async function subscribe(user){
    return await axios.post(baseUrl + "/users",user)
}
/*export async function connect(user,password){
    return await axios.post(baseUrl + "/users",)
}*/
export async function checkIfUserExist(field,search){
    return await axios.get(baseUrl + "/users/exist/"+field+"&"+search)
}