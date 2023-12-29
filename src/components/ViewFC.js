import React, { useState, useEffect } from 'react'
import ViewDetailFC from './ViewDetailFC'
import ShowUsers from './ShowUsers'


export default function ViewFC() {

    const [users,setUsers] = useState(null)
   
   
    function fetchData(){
        fetch('https://dummyjson.com/users').then(response=>response.json()).then(data=>setUsers(data.users))

        
    }

    return (
        
        <div>
            

            <h1 className='display-4'>Fetch</h1>
            
            <button onClick={fetchData}>Fetch</button>
            <hr />
           <div className='row'>
           {(users!=null)?users.map((item)=><ShowUsers key={item.id} item={item} />):''}
           </div>
            
        </div>
    )
}
