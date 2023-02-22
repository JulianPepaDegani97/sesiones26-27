import React, { useContext, useEffect, useRef } from 'react'
import Task from './Task'
import { SET_VISIBILITY } from './TaskComponent';

const TaskList = ({context, dispatch}) => {
  const taskListContext = useContext(context);
  useEffect(() => {
    console.log(taskListContext)
    console.log('sssssss')
  }, [taskListContext])
  const selectRef = useRef();
  console.log(taskListContext);
  const selectHandler = () => {
    console.log(selectRef.current.value)
    return dispatch({type: SET_VISIBILITY, visibility: selectRef.current.value})
  }
  return (
    <>
      <table>
      <thead>        
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Complete</th>
            <th>Delete</th>
          </tr>        
      </thead>
      <tbody>
      { taskListContext.length > 0 ?
          taskListContext.map(task => (
           

            task.visibility && (<Task key={task.id} dispatch={dispatch} context={context} task={task} />
             )
          )) : (JSON.stringify(taskListContext.state))
        }
      </tbody>
    </table>
   <select ref={selectRef} defaultValue='all' onChange={ selectHandler}>
        <option  value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='uncompleted'>Uncompleted</option>
   </select>
    </>
  )
}

export default TaskList