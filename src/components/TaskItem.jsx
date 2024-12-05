import axios from "axios";

import { AiFillDelete } from "react-icons/ai";
import { useAlert } from "react-alert";

import "./TaskItem.scss";

const TaskItem = ({ task, fetchTasks }) => {
    const alert = useAlert();

    const handleTaskDeletion = async () => {
        try {
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/tasks/${task._id}`
            );
            await fetchTasks();
            alert.success("Tarefa removida com sucesso.");
        } catch (_error) {
            alert.error("Ocorreu um erro ao remover a tarefa.");
        }
    };

    const handleTaskCompletionChange = async () => {
        try {
            await axios.patch(
                `${process.env.REACT_APP_API_URL}/tasks/${task._id}`,
                {
                    isCompleted: !task.isCompleted,
                }
            );
            await fetchTasks();
        } catch (_error) {
            alert.error("Ocorreu um erro ao atualizar a tarefa.");
        }
    };

    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    onClick={handleTaskCompletionChange}
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
                    onClick={handleTaskDeletion}
                />
            </div>
        </div>
    );
};

export default TaskItem;
