


/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * @author SuperManic
 * 
 */






if (process.env.NEXT_PUBLIC_APP_env === 'development') {
    // var api_origin ='http://localhost:3333'
    var api_origin = 'https://api.droomwork.io'
} else {
    var api_origin = 'https://api.droomwork.io'
}




class EasyHTTP {

    async getNoAuth(url) {

        try {
            const res = await fetch(`${api_origin}${url}`, {

                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })

            const resData = await res.json()
            return resData
        } catch (e) {
            throw new Error(e.message)
        }
    }

    async get(url, Token) {

        try {
            const res = await fetch(`${api_origin}${url}`, {

                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${Token}`,
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })

            const resData = await res.json()
            return resData
        } catch (e) {
            throw new Error(e.message)
        }
    }

    // Make an HTTP POST Request
    async post(url, data, userToken) {

        try {
            const res = await fetch(`${api_origin}${url}`, {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',

                },
                body: JSON.stringify(data) //convert to JSON string
            })
            const postedData = await res.json()
            return postedData

        } catch (e) {
            throw new Error(e.message)
        }
    }
    // POST WITHOUT AUTH

    async postNoAuth(url, data) {

        try {
            const res = await fetch(`${api_origin}${url}`, {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',

                },
                body: JSON.stringify(data) //convert to JSON string
            })
            const postedData = await res.json()
            return postedData

        } catch (e) {
            throw new Error(e.message)
        }
    }
    // Make an HTTP PUT/UPDATE Request
    async put(url, userToken, data) {
        try {
            const res = await fetch(`${api_origin}${url}`, {
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'

                },
                body: JSON.stringify(data)
            })
            const editedData = await res.json()
            return editedData
        } catch (e) {
            throw new Error(e)
        }
    }
    // Make an HTTP DELETE Request
    async delete(url) {
        try {
            const res = await fetch(`${api_origin}${url}`, {
                mode: 'cors',
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            })
            const deleteRes = await 'Resource Deleted'
            return deleteRes
        } catch (e) {
            throw new Error(e)
        }
    }
}


module.exports = EasyHTTP