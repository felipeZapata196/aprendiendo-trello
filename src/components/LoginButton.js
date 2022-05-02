import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const LoginButton = ({ setLogin, textLogin}) => {

    const navigate = useNavigate();

    const onLoginUser = () => {
        setLogin(false);
        navigate("/login")
    }

    return <button 
    onClick={() => onLoginUser()}
    style={{ border: "solid"} }
    className='btn'>{textLogin}</button>
  }
  
  LoginButton.propTypes = {
      textLogin: PropTypes.string
  }
  
  export default LoginButton