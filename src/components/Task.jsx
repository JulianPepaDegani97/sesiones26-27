import React, { useEffect, useContext } from 'react'
import { COMPLETED, DELETE_TASK } from './TaskComponent'

const Task = ({task, dispatch, context}) => {
    const taskContext = useContext(context);
    const doneStyle = {
        borderRadius: '50%',
        background: 'linear-gradient(90deg, #52b788, #40916c, #40916c)',
        border: 'none',
        width: '20px',
        height: '20px',
        boxShadow: '2px 2px 4px black'
    }
    const undoneStyle = {
        borderRadius: '50%',
        background: 'linear-gradient(90deg, #d00000, #ef233c, #370617)',
        border: 'none',
        width: '20px',
        height: '20px',
        boxShadow: '2px 2px 4px black'
    }
    const filtered = {
        display: 'none'
    }
    const undone = (id) => {
        console.log(task);
       //const data = {type: COMPLETED, id: id}
       return dispatch({type: COMPLETED, id: id})
    }
    useEffect(() => {
        console.log(taskContext);
    }, [task])
    //style={task.visibility ? {backgroundColor: 'gray'} : filtered}
    
  return (
    <tr 
    >
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{
            <button 
            style={task.completed ? doneStyle : undoneStyle}
             onClick={() => undone(task.id)}
             ></button>}
        </td>
        <td>
            <button onClick={() => dispatch({type: DELETE_TASK, id: task.id})}>
                X
            </button>
        </td>
    </tr>
  )
}

export default Task