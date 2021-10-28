import React, {useState} from "react";

type OnnOffPropsType = {
    // on: boolean
}

function OnOff(props: OnnOffPropsType) {

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

    return (
        <div>
            <div style={onStyle} onClick={() => {setOn(true) }}>On</div>
            <div style={offStyle} onClick={() => {setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;