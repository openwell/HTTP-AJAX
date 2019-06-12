import React from 'react'
import './Friend.css'

const Friend = (props) => {
    return (
        <div className='Friend'> 
            <p>Name: {props.data.name}</p>
            <p>Age: {props.data.age}</p>
            <p>Email: {props.data.email}</p>
        </div>
    )
}

export default Friend
