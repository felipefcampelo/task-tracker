import Task from './Task'

const Tasks = ({ tasks, onDelete, onDoubleClick }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task task={task} key={task.id} onDelete={onDelete} onDoubleClick={onDoubleClick} />
            ))}
        </>
    )
}

export default Tasks