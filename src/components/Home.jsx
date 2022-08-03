import AddTask from './AddTask'
import Tasks from './Tasks'

const Home = ({ showAddTask, addTask, tasks, deleteTask, updateTask }) => {
    return (
        <>
            {(showAddTask) && <AddTask onAdd={addTask} />}
            {(tasks.length) ?
                <Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={updateTask} /> :
                "No tasks created yet."
            }
        </>
    )
}

export default Home