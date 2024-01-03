import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
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

      {(user != null) ?
        <div className='w-50 border p-4 rounded'>
          <h4 className='mb-0'>User Details</h4>
          <img src={user.image} width={100} />
          <p className='mb-0'><strong>Full Name:</strong> {user.firstName + ' ' + user.lastName}</p>
          <p className='mb-0'><strong>Email:</strong> {user.email}</p>
          <p className='mb-0'><strong>Tel:</strong> {user.phone}</p>
          <p className='mb-0'><strong>Gender:</strong> {user.gender}</p>
          <p className='mb-0'><strong>Age:</strong> {user.age + ' Years old'}</p>
          <p className='mb-0'><strong>Username:</strong> {user.username}</p>
          <p className='mb-0'><strong>Password:</strong> {user.password}</p>
          <p className='mb-0'><strong>Address:</strong> {user.address.address + ', ' + user.address.city}</p>



        </div>
        : ''}
    </div>
  );
}

export default App;


//useState()
//useEffect()
//fetch().then().then()
//API Endpoint: https://dummyjson.com/users