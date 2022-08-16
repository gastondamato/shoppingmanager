import { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import '../styles/TasksLogic.css';

function TaskLogic () {
    
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if (task.text.input.trim()) {
            task.text = task.text.input.trim();

            let duplicates = false;
            const nodup = tasks.map (tasks => {
                if (tasks.text === task.text) {
                    duplicates = true;
                }
            });

            if (!duplicates) {
                const actualTasks = [task, ...tasks];
                setTasks (actualTasks);
                //const setTasks(tasks.unshift(task));
            }
        }
    }

    const completedTask = id => {
        const actualTasks = tasks.map (tasks => {
            if (tasks.id === id) {
                tasks.completed = !tasks.completed;
            }
            return tasks;
        });
        setTasks(actualTasks);
    }

    const deleteTask = id => {
        console.log ("delete", id);
        console.log (tasks);
        const actualTasks = tasks.filter(tasks => tasks.id !== id);
        setTasks (actualTasks);
    }
    
    return (
        <>
            <AddTask onSubmit={addTask}/>
            <div className='tasks-list'>
                {
                    tasks.map((task)=>
                        <Task  
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            completed={task.completed}
                            completedfn={completedTask}
                            deletefn={deleteTask}
                        />
                    )
                }
            </div>
        </>
    );
}

export default TaskLogic;