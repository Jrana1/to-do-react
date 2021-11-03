import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    const inputTextHandler = (e) => {
        //console.log(e.target.value);
        setInputText(e.target.value);
    };
    let sente = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        sente.current.value = "";
    }
    return (
        <form className="form">
            <div className="input-box">
                <input ref={sente} onChange={inputTextHandler} type="text" placeholder="write tasks here.." />
                <button onClick={submitHandler}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <div className="select">
                <select name="todos" onClick={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;