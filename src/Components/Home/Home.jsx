
import React, { useState, useEffect } from 'react';


const Home = () => {
    const [users, setUsers]=useState([]);
    console.log(users)
   useEffect(()=>{

    fetch('http://localhost:5000/users')
    .then(response => response.json())
    .then(data => setUsers(data))

   }, []);
   // Delete and User
   const handeleDeleteUser =id=>{
    const proceed=window.confirm('Are you sure, you want to delete?');
    if(proceed){
        const url=`http://localhost:5000/users/${id}`;
    fetch(url,{
        method: 'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
            alert('deleted successfully');
            const remainingUsers=users.filter(user =>user._id !==id);
            setUsers(remainingUsers);
        }
    })
    }
   }

    return (
        <div>
            <h1>home{users.length}</h1>
            <ul>
            {
                users.map(user=><li key={user._id}>
                {user.name} {user._id}  <button>Update</button><button onClick={()=>handeleDeleteUser(user._id)}>x</button>
                
                
                </li>)
            }
            </ul>
        </div>
    );
};

export default Home;