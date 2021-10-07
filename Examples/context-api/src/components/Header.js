import React from 'react'

import {useTheme} from '../context/ThemeContext';

function Header() {

    const data = useTheme();

    return (
        <div>
            <div>Header - {data.theme} - <button onClick={()=>{data.theme == 'dark' ? data.setTheme('light') : data.setTheme('dark')}}>Change Theme</button></div>
        </div>
    )
}

export default Header;
