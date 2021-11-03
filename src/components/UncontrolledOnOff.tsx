import React, {useState} from "react";

type OnOffPropsType = {
    onChange: (on: boolean) => void
}

export function UncontrolledOnOff(props: OnOffPropsType) {

    let [on, setOn] = useState(false);

    const onStyle = {
        width: '100px',
        height: '30px',
        color: 'white',
        border: '1px solid white',
        cursor: 'pointer',
        background: on ? 'green' : 'transparent'
    }
    const offStyle = {
        width: '100px',
        height: '30px',
        color: 'white',
        border: '1px solid white',
        cursor: 'pointer',
        marginTop: '10px',
        background: on ? 'transparent' : 'red'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid white',
        margin: '10px auto 0',
        background: on ? 'green' : 'red'
    }

    const onClickTrue = () => {
        setOn(true)
        props.onChange(true)
    }

    const onClickFalse = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClickTrue}>On</div>
            <div style={offStyle} onClick={onClickFalse}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}