import React from 'react'
import Button from './Button'
import Proptypes from 'prop-types'

const Header = () => {
  return (
    <div>
      <Button color='aqua' text = 'Edit my details'></Button>
      <Button color='aqua' text = 'Reset password'></Button>

    </div>
  )
}

export default Header