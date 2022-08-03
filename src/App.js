import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'

function App() {
    let initialData = []
    const [tasks, setTasks] = useState(initialData)
    const [showAddTask, setShowAddText] = useState(false)

    /**
     * useEffect to perform something after DOM loads
     */
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, [])

    /**
     * Get all tasks
     * @returns JSON
     */
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
    }

    /**
     * Get one task
     * @param {int} id 
     * @returns JSON
     */
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }

    /**
     * addTask
     * @param {int} task 
     */
    const addTask = async (task) => {
        const addResult = await fetch('http://localhost:5000/tasks', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(task)
        })
        const data = await addResult.json()
        setTasks([...tasks, data])

        // const id = Math.floor(Math.random() * 10000) + 1
        // setTasks([...tasks, { id, ...task }])
    }

    /**
     * deleteTask
     * @param {int} id 
     */
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })

        setTasks(tasks.filter((task) => task.id !== id))
    }

    /**
     * updateTask
     * @param {int} id 
     */
    const updateTask = async (id) => {
        const taskToUpdate = await fetchTask(id)
        const dataToUpdate = {
            ...taskToUpdate,
            'reminder': !taskToUpdate.reminder
        }

        const update = await fetch(`http://localhost:5000/tasks/${id}`, {
            'method': 'PUT',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(dataToUpdate)
        })

        const updateResult = await update.json();

        setTasks(tasks.map(
            (task) => (task.id === id) ?
                { ...task, reminder: updateResult.reminder } :
                task
        ))
    }

    return (
        <div className="container">
            <Router>
                <Header
                    showAddTask={() => setShowAddText(!showAddTask)}
                    addTaskVisibility={showAddTask}
                />
                
                <Routes>
                    <Route path='/' exact element={
                        <Home 
                            tasks={tasks}
                            showAddTask={showAddTask} 
                            addTask={addTask}
                            deleteTask={deleteTask}
                            updateTask={updateTask}
                        />
                    }></Route>
                    <Route path='/about' element={<About />}></Route>
                </Routes>
                
                <Footer />
            </Router>
        </div>
    );
}

// class App extends React.Component {
//     render() {
//         return (
//             <h1 className="container">
//                 <Header />
//             </h1>
//         )
//     }
// }

export default App;
