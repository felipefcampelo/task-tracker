import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onDoubleClick }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} 
            onDoubleClick={() => onDoubleClick(task.id)}>
            <h3>
                {task.text}
                <FaTimes title='Remove' style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task