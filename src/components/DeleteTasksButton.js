import React from 'react'

const DeleteTasksButton = ({deleteAllTasks, deleteTasks}) => {
    return (
        <div >
            <button className='deleteBtn btn-block' onClick={deleteAllTasks}>Delete All Tasks</button>
        </div>
    )
}

export default DeleteTasksButton;
