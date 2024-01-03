import React from 'react'

export default function UserDetails({user}) {
  return (
    <div>
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
  )
}
