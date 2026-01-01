import {useState}from 'react'

function SearchFilterArr() {
    const users=[
        {id: 1,name:"John Doe"},
        {id: 2,name:"Jane Smith"},
        {id: 3,name:"Alice Johnson"},
        {id: 4,name:"Bob Brown"},
        {id: 5,name:"Charlie Davis"}
    ]
    const[search,setSearch]=useState("");
    const filteredUsers=users.filter((user)=>
    user.name.toLowerCase().includes(search.toLowerCase())
    );


  return (
    <div>
        <input type="text" placeholder='search user'value={search} onChange={(e)=>setSearch(e.target.value)} />
        <ul>
            {filteredUsers.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>   
    </div>
  )
}

export default SearchFilterArr