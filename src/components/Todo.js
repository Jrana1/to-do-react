import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ text, setTodos, todos, todo, filteredTodos }) => {
    const deleteHandler = () => {
        setTodos(filteredTodos.filter(itm => itm.id !== todo.id));
    }
    const selectHandler = () => {
        setTodos(filteredTodos.map(itm => {
            if (itm.id === todo.id) {
                return { ...todo, completed: !itm.completed }
            }
            return itm;
        }))
    }

    return (
        <div className="item">
            <li >{text}</li>
            <div>
                <FontAwesomeIcon onClick={selectHandler} className={todo.completed ? "check1" : "check"} icon={faCheck} />
                <FontAwesomeIcon className={todo.completed ? "delete1" : "delete"} onClick={deleteHandler} icon={faTrash} />
            </div>
        </div>
    );
};

export default Todo;