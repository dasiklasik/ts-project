import React, {useState} from "react";

type OnnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

function OnOff({on, setOn, ...props}: OnnOffPropsType) {

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

    const onClickHandler = () => {
        setOn(!on)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClickHandler}>On</div>
            <div style={offStyle} onClick={onClickHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;