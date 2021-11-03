import React from 'react';
import Todo from './Todo';
const TodoLst = ({ todos, setTodos, filter, filteredTodos }) => {
    //console.log(todos);
    return (
        <div style={{ marginTop: "20px" }}>
            <ul>
                {filteredTodos.map(todo => <Todo filteredTodos={filteredTodos} text={todo.text} key={todo.id} setTodos={setTodos} todo={todo} todos={todos}

                ></Todo>)}
            </ul>
        </div>
    );
};

export default TodoLst;