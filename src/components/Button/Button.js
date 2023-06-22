import React from 'react'
import { Button } from '@mui/material'
import '../Button/Button.css'

const CustomButton = ({text, icon}) => {
  return (
    <Button 
      endIcon={ icon ? 
                <div className='btn_icon_container'>
                  {icon}
                </div> 
                : null
              }
    >
      <span className='btn_text'>{text}</span>
    </Button>
  )
}

export default CustomButton