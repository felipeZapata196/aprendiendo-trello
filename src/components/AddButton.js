import React from 'react'
import PropTypes from 'prop-types'

// Podemos recoger valores y funciones y ponerselos al button
const AddButton = ({color, text, onClick, login}) => {

  return <button 
  hidden={!login}
  onClick={onClick} 
  style={{background: color}}
  className='btn'>{text}</button>
}

AddButton.defaulProps = {
    color: 'steelblue'
}

AddButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default AddButton
