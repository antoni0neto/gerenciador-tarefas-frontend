import axios from "axios";
import { useEffect, useState } from "react";

import "./Tasks.scss";

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Tarefa 1",
            description: "Descrição da tarefa 1",
            isCompleted: false,
        },
        {
            id: 2,
            title: "Tarefa 2",
            description: "Descrição da tarefa 2",
            isCompleted: true,
        },
        {
            id: 3,
            title: "Tarefa 3",
            description: "Descrição da tarefa 3",
            isCompleted: false,
        },
    ]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get(
                // "https://neto-task-manager-ddefc5e648fa.herokuapp.com/tasks"
                "http://localhost:8000/tasks"
            );
            console.log(data);
            setTasks(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                {tasks
                    .filter((task) => task.isCompleted === false)
                    .map((task) => (
                        <div className="tasks-list" key={task.id}>
                            <p>{task.description}</p>
                        </div>
                    ))}
            </div>

            <div className="completed-tasks">
                <h3>Tarefas concluídas</h3>
                {tasks
                    .filter((task) => task.isCompleted === true)
                    .map((task) => (
                        <div className="tasks-list" key={task.id}>
                            <p>{task.description}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Tasks;
