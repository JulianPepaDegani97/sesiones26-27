import React, { useContext, useState, useRef } from 'react';
import { ADD_TASK } from './TaskComponent';
import { v4 as uuid } from 'uuid';

const TaskFormUseState = ({context, dispatch}) => {
  const taskState = useContext(context);
  console.log(taskState);

  const titleRef = useRef();
  const descriptionRef = useRef();
  
  const submit = (e) => {
    e.preventDefault();
    const data = {
      id: uuid(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      completed: false
     }
    return dispatch({type: ADD_TASK, payload: data});  
  }
  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' placeholder='title' ref={titleRef} />
        <input type='text' placeholder='description' ref={descriptionRef} />
        <button type='submit' >Add task</button>
      </form>
    </div>
  )
}

export default TaskFormUseState;