import { AiFillDelete } from "react-icons/ai";
import "./TaskItem.scss";

const TaskItem = ({ task }) => {
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
                    <AiFillDelete size={18} color="#F97474" />
                </label>
            </div>
        </div>
    );
};

export default TaskItem;
