import React, { useState, useEffect } from 'react';

const myFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() =>{
        async function fetchFunction() {
            await fetch(url ,{
            headers:{
                'Accept':'application/json',
                // // 'Authorization': `Bearer ${Token}`,
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin':'*'
                }
            })
            .then(response => {
                if(!response.ok){
                    throw Error("Could not fetch data")
                }
                return response.json();
            })
            .then(data => {
                setData(data)
                setIsPending(false)
            })
            .catch(err => {
                if(err.name ==='AbortError'){
                    console.log("error")
                } else {
                    setIsPending(false)
                    setError(err.message)
                }
            })
        }
        fetchFunction();
    }, [url])
    return {data, isPending, error}

}

export default myFetch;