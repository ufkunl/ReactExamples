import { React, useState,useEffect } from 'react'

function Form({toDoList,addToDoList}) {

    useEffect(() => {
        setTodo({ text: '', isSuccess: false });
    }, [toDoList])

    const [todo, setTodo] = useState({ text: '', isSuccess: false });

    const onChangeInput = (e) => setTodo({ ...todo, [e.target.name]: e.target.value });

    var setToDoList = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            if(todo.text === ''){
                return false;
            }
            addToDoList([...toDoList, todo]);
        } 
    }

    return (
        <div>
            <form>
                <input className="new-todo" name='text' value={todo.text} onKeyPress={setToDoList} placeholder="What needs to be done?" autoFocus onChange={onChangeInput}/>
            </form>
        </div>
    )
}

export default Form;
