import React, {useEffect, useMemo, useState} from "react";


export const UseEffectTest = () => {


    const [count, setCount] = useState(0)


    // useEffect(() => {
    //     document.title = 'hello'
    // })

    const changer =

        useEffect(() => {

            setInterval(() => {
                setCount((state: number) => {
                    return state + 1
                })
            }, 1000)
        }, [])

    const increaseMessageCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>useState demo</h2>
            {/*<button onClick={increaseMessageCount}>+</button>*/}
            {count}
        </div>
    )
}


type inStateType = {
    seconds: number
    minutes: number
    hours: number
}


export const UseEffectClocks = () => {

    const [time, setTime] = useState<inStateType>({
        seconds: 0,
        minutes: 0,
        hours: 0,
    })


    useEffect(() => {
        setInterval(() => {
            setTime((state: inStateType):  inStateType=> {
                if (state.seconds < 60) {
                    return {...state, seconds: state.seconds + 1}
                } else {
                    if (state.minutes < 60) {
                        return {...state, minutes: state.minutes+1, seconds: 0}
                    } else {
                        return {...state, hours: state.hours+1, minutes: 0, seconds: 0}
                    }
                }
            })
        }, 1000)
    }, [])


    return (
        <>
            <span>{time.hours}:</span>
            <span>{time.minutes}:</span>
            <span>{time.seconds}</span>
        </>
    )
}
