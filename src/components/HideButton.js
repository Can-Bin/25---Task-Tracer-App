import React from 'react'

const HideButton = ({hideAllTasks, text}) => {
    return (
        <div>
            <button className='hideBtn btn-block' onClick={hideAllTasks}>{text}</button>
        </div>
    )
}

export default HideButton
