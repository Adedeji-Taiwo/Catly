import React from 'react'


  const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    outline: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
    } 

const Button = ({onClick, text}) => {
    return (
        <div>
            <button style = {buttonStyles} onClick = {onClick}>{text}</button>
        </div>
    )
}

export default Button;
