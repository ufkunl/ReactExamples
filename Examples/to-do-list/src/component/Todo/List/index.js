import { React, useEffect } from 'react'
import '../style.css'

function List({toDoList, addToDoList}) {

    const btnRemove = (index) => {
        const newList = toDoList.filter((item,i) => i !== index);
        addToDoList(newList);
    }

    const changeChecked = (index) => {
        const newList = toDoList.map((element,i) => {
            if(index === i ){
                element.isSuccess = !element.isSuccess;
            }
            return element;
        });
        addToDoList(newList);
    }

    return (
        <div>
            <section className="main">
                <ul className="todo-list">
                    {
                        toDoList.map((element, index) => (
                            <li key={index} className = {element.isSuccess ? 'completed' : undefined}>
                                <div className="view">
                                    <input className="toggle" type="checkbox" onChange={() => changeChecked(index)} checked={element.isSuccess} />
                                    <label>{element.text}</label>
                                    <button className="destroy" onClick={() => btnRemove(index)}></button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    )
}

export default List;
