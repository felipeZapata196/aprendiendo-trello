import React from 'react'
import PropTypes from 'prop-types'
import AddButton from './AddButton'
import EditButton from './EditButton'
import LoginButton from './LoginButton'
import { useLocation } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

// props ahora es el título 
// Podemos pasarle parametros desde aquí al button y hasta funciones "onClick"
// FALTA PASAR EL SETLOGIN
const Header = ({title , onAdd, showAdd, onEdit, login, setLogin }) => {
  // Esto nos permite ver la ruta en la que estamos actualmente
  const location = useLocation()
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Row>
        <Col>
        {/* No podemos setear el Login en el boton de abrir login. Lo tenemos que hacer en el boton del "formulario Login.js" */}
          {location.pathname === "/" ? (
            <LoginButton 
              login={login} 
              setLogin={(value) => setLogin(value)} 
              textLogin={login ? "Log out" : "Login"}
            />
          ) : null }
        </Col>
        <Col>
          {/* Vamos a añadir un condicional "? :" para dependiendo de la ruta en la que estamos,
          mostrar o no el botón de add task */}
          {location.pathname === "/" ? (
          <AddButton 
            login={login}
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd} 
          />
          ) : null }
          {location.pathname.indexOf('task') !== -1 ? (
          <EditButton 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Edit'} 
            onClick={onEdit}
          />
          ) : null }
        </Col>
      </Row>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header