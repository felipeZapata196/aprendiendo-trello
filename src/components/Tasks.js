import Task from './TaskItem'
//import { useState } from 'react'

// TASKS IN STATE
// Queremos que la lista de tareas sea parte de nuestro state, para ello llamamos al hook useState
// La variable tasks, es donde tendremos la lista de tareas actual y setTasks sera una función para
// actualizar la lista. Ahora la lista de tareas es parte del estado de nuestro componente.

// -> Es importante saber que no puedes hacer un push al array, porque el estado es inmutable 
// no es algo que pueda cambiar directamente.

// Si queremos añadir a la lista una nueva tasks usariamos: 
// setTasks([...tasks, {"nueva task"}]) -> esto significa que entrariamos a la función para actualizar,
// con los 3 puntos y el array le pasamos lo que teníamos y al lado le añadimos la nueva task.

// Recogemos las tasks y las funciones de App.js y lanzamos la lista con un formato. Necesitaremos .map para montar la lista
// Este formato vendrá por parte de otro componente donde tendremos formato que usa cada item del array.
// Por ello uno a uno le vamos pasando a TaskItem.js la propia task y la función onDelete

// CREO QUE POR AQUÍ FALLA ALGO CON LA KEY O LA LISTA DE TASKS

const Tasks = ({ tasks, onDelete, login }) => {
  console.log("Lista de tarea que llega a Tasks ", tasks)
  return (
    <div>
        {tasks.map((task) => (
        <Task 
         key={task.id}
         task={task} 
         onDelete={onDelete}
         login={login}/>
        ))}
    </div>
  )
}

export default Tasks