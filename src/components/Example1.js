import React from 'react'
import { useState } from 'react'
import Slider, {createSliderWithTooltip} from 'rc-slider'
import 'rc-slider/assets/index.css'

const Example1 = (props) => {
    const [value, setValue] = useState(50);
    const SliderWithToolTip = createSliderWithTooltip(Slider);

    return (
        <div className="ex1">
            <p>Say you had $5, and you were offered an 80% chance of getting $6.25 back, or nothing. Should you take that bet?
            </p>
            <SliderWithToolTip className="slider"
                min={0} 
                max={100}
                step={1}
                defaultValue={50}
                railStyle={{ backgroundColor: 'white', height: 10 }}
                trackStyle={{ backgroundColor: 'grey', height: 10 }}
                handleStyle={{
                    borderColor: '#1b417d',
                    height: 20,
                    width: 20,
                    backgroundColor: 'black',
                  }}     
            />
        </div>
    )
}

export default Example1;