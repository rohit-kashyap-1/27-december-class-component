import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import UserDetails from './components/JAN03/UserDetails';
function App() {
  const [users, setUsers] = useState([]) //users.length = 0
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState(0)

  useEffect(() => {
    fetch('https://dummyjson.com/users').then(response => response.json()).then(data => { setUsers(data.users) })
  }, [])
  useEffect(() => {
    if (userId != 0)
      fetch('https://dummyjson.com/users/' + userId).then(response => response.json()).then(data => { setUser(data) })


    //...data, 
  }, [userId])




  function changeUser(event) {
    setUserId(event.target.value)
  }

  return (
    <div className="App container pt-4">

      <div className='w-25'>
        <select className='form-control form-select' value={userId} onChange={changeUser}>
          <option value={''}>Select User </option>
          {(users.length != 0) ? users.map((item) => <option key={item.id} value={item.id}>{item.firstName + ' ' + item.lastName}</option>) : ''}
        </select>
        <hr />

        {console.log(userId)}

      </div>
      {(user != null) ?<UserDetails user={user} /> : ''}

      
    </div>
  );
}

export default App;


//useState()
//useEffect()
//fetch().then().then()
//API Endpoint: https://dummyjson.com/users