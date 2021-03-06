import React from 'react'
import { useState } from 'react'
import Switch from 'react-switch'

const Example1 = (props) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (checked) => {
        setChecked(checked);
        console.log(checked);
    }

    const handleSubmit = () => {

    }


    return (
        <div className="ex1">
            <p>Say you had $5, and you were offered an 80% chance of getting $6.25 back, or nothing. Should you take that bet?
            </p>
            <form onSubmit={handleSubmit}>
                <label>
                    <Switch onChange={handleChange} checked={checked} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <p>If we go strictly by risk vs reward it isn't a great bet (6.25/5 = 1.25). </p>
            
        </div>
    )
}

export default Example1;