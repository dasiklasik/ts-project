import React, {useState} from "react";
import s from './UncontrolledRating.module.css'

// type RatingPropsType = {
//     value: 0 | 1 | 2 | 3 | 4| 5
// }

export function UncontrolledRating() {
    console.log('Rating rendering');

    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>

        </div>
    )
}

// type StarPropsType = {
//     selected: boolean
// }

function Star() {

    const [onOff, setOnOff] = useState(false)


    const makeStarBold = () => {
        setOnOff(!onOff)
    }

    let what = onOff ? 'on' : 'off';

    console.log('Star rendering');
    return <span onClick={makeStarBold} className={s[what]}>star</span>;

}

