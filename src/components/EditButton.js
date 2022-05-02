import React from 'react'
import PropTypes from 'prop-types'

// Podemos recoger valores y funciones y ponerselos al button
const EditButton = ({color, text, onClick}) => {

  return <button 
  onClick={onClick} 
  style={{background: color}}
  className='btn'>{text}</button>
}

EditButton.defaulProps = {
    color: 'steelblue'
}

EditButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default EditButton