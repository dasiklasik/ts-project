import React, {useState} from "react";
import s from './UncontrolledRating.module.css'

// type RatingPropsType = {
//     value: 0 | 1 | 2 | 3 | 4| 5
// }

export function UncontrolledRating() {
    console.log('Rating rendering');

    const [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} id={1}/>
            <Star selected={value > 1} setValue={setValue} id={2}/>
            <Star selected={value > 2} setValue={setValue} id={3}/>
            <Star selected={value > 3} setValue={setValue} id={4}/>
            <Star selected={value > 4} setValue={setValue} id={5}/>

        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
    id: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
    console.log('Star rendering');
    const onClickHandler = () => {
        props.setValue(props.id)
    }
    return <span>{props.selected ? <b onClick={onClickHandler}>star</b> : 'star'}</span>

}

