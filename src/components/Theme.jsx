import { useState, useEffect } from 'react';
import '../css/Theme.css'
import { ImSwitch } from "react-icons/im";

const Theme = () => {
    const [isLight, setIsLight] = useState(false);

    const toggleTheme = () => { setIsLight((prev) => !prev); };

    useEffect(() => {
        if (isLight) {
            document.body.setAttribute('data-theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
        }
    }, [isLight]);

    return (
        <div>
            <button id='switch' onClick={toggleTheme} aria-label="Toggle theme"> 
                <ImSwitch size='1.5rem' /> 
            </button>
        </div>

    )
}

export default Theme