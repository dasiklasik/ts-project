import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4| 5
    setRatingValue: (value: 0 | 1 | 2 | 3 | 4| 5) => void
}

function Rating(props: RatingPropsType) {
    console.log('Rating rendering');

    return (
        <div>
            <Star selected={props.value > 0} setRatingValue={props.setRatingValue} id={1}/>
            <Star selected={props.value > 1} setRatingValue={props.setRatingValue} id={2}/>
            <Star selected={props.value > 2} setRatingValue={props.setRatingValue} id={3}/>
            <Star selected={props.value > 3} setRatingValue={props.setRatingValue} id={4}/>
            <Star selected={props.value > 4} setRatingValue={props.setRatingValue} id={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setRatingValue: (value: 0 | 1 | 2 | 3 | 4| 5) => void
    id: 0 | 1 | 2 | 3 | 4| 5
}

function Star(props: StarPropsType) {
    console.log('Star rendering');
    return <span onClick={() => props.setRatingValue(props.id)}>{props.selected ? <b>star</b> : 'star'}</span>

}

export default Rating;