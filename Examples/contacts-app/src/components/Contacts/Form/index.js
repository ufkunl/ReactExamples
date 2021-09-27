import React from 'react'
import { useState, useEffect } from "react";

function Form({addContacts, contacts}) {

    const initForm = { fullName: '', phoneNumber: '' };

    const [form, setForm] = useState(initForm);

    useEffect(() => {
        setForm(initForm);
    },[contacts]);

    const onChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullName === '' || form.phoneNumber === ''){
            return false;
        }
        addContacts([...contacts,form]);
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    <input name='fullName' onChange={onChangeForm} value={form.fullName} placeholder='Full Name' />
                </div>
                <div>
                    <input name='phoneNumber' onChange={onChangeForm} value={form.phoneNumber} placeholder='Phone Number' />
                </div>
                <div className='btnAdd'>
                    <button>Add</button>
                </div>
            </div>
        </form>
    )
}

export default Form;
