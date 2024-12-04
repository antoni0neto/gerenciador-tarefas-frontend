import axios from "axios";
import "./TaskItem.scss";

import { AiFillDelete } from "react-icons/ai";
import { useAlert } from "react-alert";

const TaskItem = ({ task, fetchTasks }) => {
    const alert = useAlert();

    const handleTaskRemove = async () => {
        try {
            axios.delete(`http://localhost:8000/tasks/${task._id}`);
            await fetchTasks();
            alert.success("Tarefa removida com sucesso.");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        task.isCompleted
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {task.description}
                    <input type="checkbox" defaultChecked={task.isCompleted} />
                    <span
                        className={
                            task.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>

            <div className="delete">
                <AiFillDelete
                    size={18}
                    color="#F97474"
                    onClick={() => handleTaskRemove()}
                />
            </div>
        </div>
    );
};

export default TaskItem;
