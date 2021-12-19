import react from "react";
import { useState } from "react";

const AddTask = ({addTask}) => {

    const [text, setText] = useState("")
    const [day, setDay] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        addTask({text, day, isDone: false})
        setText("");
        setDay("");
    }
 
    return(
        <form className="add-form" onSubmit={onSubmit} >
            <div className="form-control">
                <label htmlFor="task">Task</label>
                <input type="text" placeholder="Enter a task" id="task" name="text"  onChange={(e) => setText(e.target.value)} value={text} required />
            </div>
            <div className="form-control">
                <label htmlFor="day">Day & Time</label>
                <input type="text" placeholder="Enter a task" id="day" name="day" onChange={(e) => setDay(e.target.value)} value={day} required/>
            </div>
            <input type="submit" id="" value='Add Task' className="btn btn-block" />
              
        </form>
    )
}

export default AddTask;