import React from 'react'
import  Form  from "./Form";
import  List  from "./List";
import { useState, useEffect } from "react";
import "./style.css"

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullName: 'Mehmet',
            phoneNumber: '065663'
        },
        {
            fullName: 'Ali',
            phoneNumber: '065663'
        },
        {
            fullName: 'Mahmut',
            phoneNumber: '065663'
        }
    ]);

    return (
        <div id='container'>
            <List contacts={contacts}/>
            <Form addContacts={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts;
