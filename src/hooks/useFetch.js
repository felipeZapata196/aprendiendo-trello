import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showAddTask, setShowAddTask] = useState(false)
    const [login, setLogin] = useState(false);
    const [task, setTask] = useState({
        id: null,
        name: '',
        day: '',
        reminder: false,
        description: ''
    });

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((tasks) => setTasks(tasks))
            .then((showAddTask) => setShowAddTask(!showAddTask))
            .then((login) => setLogin(!login))
            .then((task) => setTask(task))
            .catch((e) => setError("Ocurrió un error"))
            .finally(() => setLoading(false));

    }, [url]);

    return { tasks, error, loading, showAddTask, login, task };
};