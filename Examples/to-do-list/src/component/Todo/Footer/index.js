import { React, useEffect, useState } from 'react'

function Footer({toDoList,addToDoList}) {

    const [oldList, setOldList] = useState([...toDoList]);

    const clearList = () => {
        addToDoList(oldList);
    }

    const countIsNotSuccess = () => {
        var count = 0;
        toDoList.forEach(element => {
            if(!element.isSuccess){
                count++;
            }
        });
        return count;
    }

    const activeList = () => {
        clearList();
        let newList = oldList.filter((item) => !item.isSuccess);
        addToDoList(newList);
    }

    const completedList = () => {
        clearList();
        let newList = oldList.filter((item) => item.isSuccess);
        addToDoList(newList);
    }

    const clearCompleted = () => {
        clearList();
        let newList = oldList.filter((item) => !item.isSuccess);
        addToDoList(newList);
    }

    const allList = () => {
        clearList();
    }

    const count = countIsNotSuccess();

    return (
        <div>
            <footer className="footer">
                <meta/>
                    <meta/>
                        <span className="todo-count">
                            <strong>{count} item left</strong>                
                        </span>

                        <meta/>
                            <ul className="filters">
                                <li>
                                    <a onClick={allList}>All</a>
                                </li>
                                <li>
                                    <a onClick={activeList}>Active</a>
                                </li>
                                <li>
                                    <a onClick={completedList}>Completed</a>
                                </li>
                            </ul>
                            <button className="clear-completed" onClick={clearCompleted}>Clear completed
                            </button>
                        </footer>
        </div>
        );
    }
export default Footer;
