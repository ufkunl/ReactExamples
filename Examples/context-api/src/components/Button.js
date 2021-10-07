import React from 'react'

import {useTheme} from '../context/ThemeContext';

function Button() {

    const data = useTheme();

    return (
        <div>Button - {data.theme} - <button onClick={()=>{data.theme == 'dark' ? data.setTheme('light') : data.setTheme('dark')}}>Change Theme</button></div>
    )
}

export default Button;
