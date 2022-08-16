import "../styles/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task ( { id, text, completed, completedfn, deletefn } ) {
    return (
        <div className={ completed ? 'task-container completed':'task-container' } >
            <div 
                className='task-item'
                onClick={() => completedfn(id)}>
                {text}
            </div>
            <div 
                className="task-icon"
                onClick={() => deletefn(id)}>
                    <AiOutlineCloseCircle />
            </div>
        </div>
    );
}

export default Task;