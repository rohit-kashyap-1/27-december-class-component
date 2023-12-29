import React from 'react'

export default function ShowUsers(props) {
    return (
        <div className='col-md-3'>
            <div className='card'>
                <div className='card-body'>
                    {props.item.firstName}
                </div>
            </div>
        </div>

    )
}
