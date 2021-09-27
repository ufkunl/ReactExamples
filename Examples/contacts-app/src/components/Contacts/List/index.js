import React, { useState } from 'react'

function List({ contacts }) {

    const [searchText, setSearchText] = useState('');

    const searchTextOnChange = (e) => {
        setSearchText(e.target.value);
    };


    var filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(searchText.toLowerCase())
        )
    })

    // only by name

    // var filtered = contacts.filter((item) =>
    //     item.fullName.toLowerCase().includes(searchText.toLowerCase())
    // )

    return (
        <div>
            <h1>Contacts</h1>
            <input placeholder='Arama' onChange={searchTextOnChange} />
            <ul className='list'>
                {
                    filtered.map((contact, index) => (
                        <li key={index}>
                            <span>{contact.fullName}</span>
                            <span>{contact.phoneNumber}</span> 
                        </li>
                    ))
                }
            </ul>
            <p>Total contacts ({filtered.length})</p>
        </div>
    )
}

export default List;