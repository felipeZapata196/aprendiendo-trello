import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

// ESTE COMPONENTE CREARÁ UN USUARIO CON LOS DATOS DE LOS INPUTS Y LOS COMPARARÁ CON LOS DEL USUARIO DEFINIDO (Tengo que buscar usuarios)
// SI SON IGUALES CAMBIARÁ DE PÁGINA (Le pasará una bool para decir que se ha logueado) Y SI NO MANDARÁ UN MENSAJE DE QUE NO EXISTE DICHO USUARIO

// -> MIRAR HACER EL LOGIN CON AUTH0

const Login = ({ setLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])
    // const [userLogin, setUserLogin] = useState(false)

    const navigate = useNavigate();


    // Con -> window.location.href="./" volvemos a la ruta indicada
    
    // hacer una llamada por nombre 

    // Necesito buscar la lista de usuarios:

    const fetchUsers = async () => {
        try {
            const res = await fetch(`http://localhost:3001/users?email=${email}`)
            const data = await res.json()

            // Devuelve todos los objetos que pasan el filtro
            // const user = res.filter(user => user.email === email)

            console.log("data que llega a Login ",data);

            setUsers(data);
            // Ya puedo buscar por email y si existe un usuario con ese email me lo saca y si no saca un array vacio

            console.log("Password de data ",data[0].password);
            console.log("Password de variable", password);
            // Necesito comprobar que la contraseña coincida con el usuario
            if (data[0].password !== password){
                console.log("Contraseña incorrecta")
            }
            else {
                console.log("Has iniciado correctamente")
                navigate('/')
                setLogin(true)
                // login = !this.props.login
                console.log("Cambio de login: ",setLogin)
            }

            return data
        }catch (e) {
            console.log("Este usuario no existe");
            return console.log(e)
        }
        // Tiene que buscar por email y si no lo encuentra ya hará algo

        // El sacar la task funciona falla el cambiar de ruta
        // Luego tengo que pasar el resultado a TaskView
      }

    // Puedo intentar hacer que name = 'Usuario1' y si el setName recoge algo diferente
    // no puedo iniciar sesión y al darle a entrar mandará un sweetAlert diciendo que es incorrecto

    // Creo que necesito que la función onSubmit me compare lo que recoge con lo que tiene
    const onSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem('email', email);
        fetchUsers()
    }

    // En los onChange tendré que recoger el valor y luego comprobarlo con el que esta en la BD
  return (
    <div className='containerPrincipal' >
        <div className='containerSecundario'>
            <div className='form-group'>
                <label>Email: </label>
                <br />
                <input 
                    type="text" required placeholder="email@gmail.com"
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br />
                <label>Password: </label>
                <br />
                <input 
                    type="password" required placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className='btn btn-primary' type="submit" onClick={onSubmit}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login