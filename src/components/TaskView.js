import React from 'react'
import { useLocation, useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { FaTimes } from 'react-icons/fa'
import moment from 'moment'
import AddTask from './AddTask';

// El task esta vacio no me setea el task con el data de la función fetchTask

// Una vez lo recoja uso un useEffect pasandole la id
// Con esto ya puedo recoger los parametros que quiera
// Estando ya en la TaskView, desde ahí ya seteamos la task.

const TaskView = ({ taskId, onDelete, onEdit, showAdd, login, change, setChange }) => {
  // const [task, setTask] = useState(null);

  console.log("id TaskView "+taskId);
  const [task, setTask] = useState({});

  const params = useParams();

  console.log("Params ruta ",params.id)

  const navigate = useNavigate();

  // const { task, error, loading } = useFetch(
  //   "http://localhost:3001/tasks/" + idTask
  // );

    // useEffect(() => {
    //   const getTask = async () => {
    //     //const tasksFromServer = await fetchTask()
    //     //setTask(tasksFromServer)
    //   }
  
    //   getTask();
    // },[])

    useEffect(() => {
      if (!login){
        navigate("/")
      }

      // Tengo que decirle que algo ha cambiado y volver a buscar "Puedo usar una boolean". En la lista de tasks si que me carga porque tengo el array en local.
      // Si se ha editado buscará de nuevo (para saber que se ha editado necesitamos pasar una bool del formulario, aquí cuando le damos al botón de guardar. También hay que
      // pasar la bool, cuando borramos la tarea)
      // La boolean va a cambiar cuando pase por onEdit y por onDelete
      fetchTask()

      console.log("Estado del cambio ", change)
      if(change){
        fetchTask()
      }
      setChange(false)
    },[change])

    // FETCH TASK
    // Guardará el contenido de una task que buscará por su id.
  const fetchTask = async () => {
    const res = await fetch(`http://localhost:3001/tasks/${params.id}`)
    const data = await res.json()

    // El sacar la task funciona falla el cambiar de ruta
    // Luego tengo que pasar el resultado a TaskView
    console.log("Task de data ",data);
    setTask(data)
  }

  console.log("Task reminder ", task.reminder);
  // console.log("Task que llega a TaskView ",task)
  //   console.log("Reminder de la Task ",task.reminder)
    //console.log(error)
    // Esta linea la usaba para recoger los parametros de la url
    // const query = new URLSearchParams(useLocation().search)
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}>
        <h3>
            {task.name}{' '}
            <FaTimes style={{ color: 'red', cursor: 'pointer' }}
             onClick={() => onDelete(task.id) }/>
        </h3>
        <p>
          {moment(task.day).format('D MMMM YYYY HH:mm')}
        </p>
        <p>
          {task.description}
        </p>
    </div>
  )
}

// APUNTES PARA HACER EL EDITAR MAÑANA:
// Crear boton Nuevo de Editar cuando accedes a la vista de la tarea. Con ese ya puedo cerrar y abrir ARREGLAR EN HEADER EL PATHNAME

// El objeto task lo tengo en Tasks y en TaskView.
// La id de la task la tengo guardada en App con taskId
// Tengo que pasar la task a el componente del formulario

// Un único botón que al cerrar el formulario, guarde los datos modificados.
// Con el nuevo botón no necesito un ternario. Simplemente le pongo al nuevo la función de editar.
// Cuando vaya a la vista de la tarea, por defecto este cerrado el formulario.
// Pasar los datos de la tarea al componente del formulario.
// Consejo -> Buscar referencias de aplicaciones similares

export default TaskView