import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, showAddTask, addTaskVisibility }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {
                (location.pathname === '/') &&
                <Button
                    text={(addTaskVisibility === true) ? 'Close' : 'Add'}
                    color={(addTaskVisibility === true) ? 'red' : 'green'}
                    showAddTask={showAddTask} />
            }
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS
// const style = {
//     color: "#ffffff",
//     backgroundColor: "#000000",
//     padding: "30px"
// }

export default Header