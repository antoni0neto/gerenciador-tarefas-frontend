import { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";
import axios from "axios";

const App = () => {
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
        <div>
            <h1>Tarefas:</h1>
            {tasks.map((task) => {
                return <TaskItem key={task.id} task={task} />;
            })}
        </div>
    );
};

export default App;
