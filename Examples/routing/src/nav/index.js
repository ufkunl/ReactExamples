import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/users">Users</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
