import React, {useRef} from 'react'
import '../styles/switch.css'

function  Switch  ({setDarkMode, checked, setChecked}){

    const ref = useRef(null) 
    function handleChange() {
        setChecked(ref.current.checked)
        setDarkMode(ref.current.checked)
    } 


    return(
        <div className = "dark-mode">
            <p className = "dark-mode-tittle">Dark Mode</p>
            <input ref ={ref} onChange = {handleChange} type = "checkbox" className = "checkbox" id = "checkbox" checked = {checked}
             setChecked = {setChecked}/>
            <label className = "switch" htmlFor = "checkbox"/>
        </div>
    )
}

export default Switch