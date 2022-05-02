import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

// Creo que necesito pasar la función a App.js
// La función tiene que recoger la variable login
const Profile = ({ login }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    // Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse
    // En useEffect
    // [] solo se ejecutará la primera vez que entra, ["var"] se ejecutará con cada cambio de estado de esa variable
    // y sin nada cada segundo o con cada tick.
    useEffect(() => {
        if (!login) {
            navigate("/")
        }
        setEmail(getData())
    }, []);

    const getData = () => {
      return localStorage.getItem('email')
    }

  return (
    <div>
      <h4>{ email }</h4>
    </div>
  )
}

export default Profile