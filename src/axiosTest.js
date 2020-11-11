const axios = require('axios')

let BASE_URL = 'http://localhost:3000'



async function test_create(resource) {
    const result = await axios.post(`${BASE_URL}/users`, resource)
    return result.data
}

async function test_get(id) {
    const result = await axios.get(`${BASE_URL}/users/${id}`)
    return result.data
}

async function test_replace(id, resource) {
    const result = await axios.put(`${BASE_URL}/users/${id}`, resource)
    return result.data
}

async function test_patch(id, partial_resource) {
    const result = await axios.patch(`${BASE_URL}/users/${id}`, partial_resource)
    return result.data
}

async function test_delete(id) {
    const result = await axios.delete(`${BASE_URL}/users/${id}`)
    return result.data
}

async function tests() {
    const newResource = {
        name: 'Is it a real resource?',
        lastName: 'May be',
    }
    const putResource = {
        name: 'Is it funny?',
        lastName: 'May be',
    }
    const patchResource = {
        name: 'Is it cool?',
        lastName: 'May be',
    }

    const createResult = await test_create(newResource)
    console.log(createResult)
    const getResult = await test_get(Object.keys(createResult.content)[0])
    console.log(getResult)
    const putResult = await test_replace(Object.keys(createResult.content)[0],putResource)
    console.log(putResult)
    const patchResult = await test_patch(Object.keys(createResult.content)[0],patchResource)
    console.log(patchResult)


}

tests().then(()=>console.log("done")).catch(
    e=>console.log(e)
)