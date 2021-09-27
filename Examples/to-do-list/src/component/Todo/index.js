import {React, useState} from 'react'
//rfce
import Form from "./Form";
import List from "./List";
import Footer from "./Footer"
import "./style.css";

function Todo() {

    const [toDoList, setToDoList] = useState([
        {text: 'Çiçekleri Sula', isSuccess: false},
        {text: 'Arabayı Yıka', isSuccess: true},
        {text: 'Kitap Oku', isSuccess: false},
    ]) 

    return (
        <div>
            <section className="todoapp">
                <header className ="header">
                    <h1>todos</h1>
                    <Form toDoList={toDoList} addToDoList={setToDoList}/>
                </header>   
            </section>
            <List toDoList={toDoList} addToDoList={setToDoList}/>
            <Footer toDoList={toDoList} addToDoList={setToDoList}/>
            <footer className="info">
                <p>Click to edit a todo</p>
                <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
        </div>
    )
}

export default Todo;
