// Fetch API data using useEffect and useState hook in react 
// useEffeact:-the useEffect hook allows us to perform side effects in functional components
// such as fetching data from an api updating the documnet tittle or setting up a subscription 
// useEffect ka use hm islia krte h kyuki hme kisi components ka render ka baad koi opration perform krna ho tb krte h as a sideEffect issa mainly hm api call krna ka lia krte  h
import { useState,useEffect } from "react";
import React from 'react'
function FetchAPI(){
    const [users,setUser]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=>setUser(data));
    },[])
    return(
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default FetchAPI;