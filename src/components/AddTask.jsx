import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const formSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please, add the task text.')
            return
        }

        if (!day) {
            alert('Please, set the day and time.')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={formSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add task" value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input type="datetime-local" placeholder="Add day and time" value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control-check form-control">
                <label className="d-inline">Set reminder</label>
                <input id="check-reminder" className="d-inline" type="checkbox"
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                    checked={reminder} />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Save</button>
        </form>
    )
}

export default AddTask