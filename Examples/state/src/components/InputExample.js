import React from 'react';
import { useState } from 'react';

function InputExample() {

const [form, setForm] = useState({name: "", surName: ""});

const changeForm = (event) =>{
    setForm({...form, [event.target.name]: event.target.value })
};

return <div>

    <h2>Name:</h2>
    <input name="name" value={form.name} onChange={changeForm}/>
    <h2>SurName:</h2>
    <input name="surName" value={form.surName} onChange={changeForm}/>
    <br></br>
    <hr></hr>
    <h4>{form.name + ' ' + form.surName}</h4>
</div>
    
}
export default InputExample;