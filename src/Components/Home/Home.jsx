
import React, { useState, useEffect } from 'react';


const Home = () => {
    const [users, setUsers]=useState([]);
    console.log(users)
   useEffect(()=>{

    fetch('https://fathomless-castle-26895.herokuapp.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))

   }, []);
   // Delete and User
   const handeleDeleteUser =id=>{
    const proceed=window.confirm('Are you sure, you want to delete?');
    if(proceed){
        const url=`https://fathomless-castle-26895.herokuapp.com/users/${id}`;
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