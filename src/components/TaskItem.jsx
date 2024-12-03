const TaskItem = ({ task }) => {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.isCompleted ? "Concluído" : "Pendente"}</p>
        </div>
    );
};

export default TaskItem;
