import React from 'react'

function Button({color='blue',text='noState'}){
  return(
    <button style={{color:color}}>{text}</button>
  )
}

export default Button;