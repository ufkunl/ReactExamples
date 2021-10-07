import {React,useContext} from 'react'
import {useTheme} from '../context/ThemeContext';
import Button from "./Button"
import Header from './Header';
import Profile from './Profile';


function Container() {

    const {theme,setTheme} = useTheme();
    return (
        <div className={theme}>
            <Header/>
            <hr/>
            <Button/>
            <hr/>
            <Profile/>
        </div>
    )
}

export default Container;
