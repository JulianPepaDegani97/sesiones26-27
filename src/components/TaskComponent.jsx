import React, { useReducer } from 'react';
import TaskFormUseState from './TaskFormUseState';
import TaskList from './TaskList';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const FILTER_TASK = 'FILTER_TASK';
export const COMPLETED = 'COMPLETED';
export const SET_VISIBILITY = 'SET_VISIBILITY';

const myContext = React.createContext(null);

const TaskComponent = () => {

    const initialState = [];

    const taskReducer = (state, action) => {
        switch (action.type) {
            case ADD_TASK:
                return ( 
                    [...state, {
                        id: action.payload.id,
                        title: action.payload.title,
                        description: action.payload.description,
                        completed: action.payload.completed,
                        visibility: true
                    }])
                    
                
            case DELETE_TASK: 
                return ([...state.filter(task => task.id !== action.id)])
                
            case COMPLETED:
                
                return ( 
                     [...state.map(task => (
                        
                        task.id === action.id ?
                         {
                            ...task,
                            completed: !task.completed 
                            
                        } : 
                        task
                    ), console.log(state))]
                    
                )

            case SET_VISIBILITY:
                return([...state.map(task => {
                    if(action.visibility === 'completed' && task.completed == false) {
                        return ({
                            ...task,
                            visibility: false
                        })
                    } else if (action.visibility === 'uncompleted' && task.completed) {
                        return ({
                            ...task,
                            visibility: false
                        })
                    } else if (action.visibility === 'all') {
                        return ({
                            ...task,
                            visibility: true
                        })
                    }
                    else {
                        return ({
                            ...task,
                            visibility: true
                        })
                    }
        })])
            
            default:
                break;
        }
    }
    const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <myContext.Provider value={state}>
        <div>
            <TaskFormUseState context={myContext} dispatch={dispatch} />
            <TaskList context={myContext} dispatch={dispatch} />
        </div>
    </myContext.Provider>
  )
}

export default TaskComponent;