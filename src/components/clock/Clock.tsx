import React, {useEffect, useState} from "react";

type dateStateType = {
    seconds: string
    minutes: string
    hours: string
}

const convertTime = (time: number) => {
    if (time < 10) {
        return '0' + time.toString()
    } else {
        return time.toString()
    }
}

export const Clocks2 = () => {

    const setDate = () => {
        let date = new Date()
        let hours = convertTime(date.getHours())
        let minutes = convertTime(date.getMinutes())
        let seconds = convertTime(date.getSeconds())

        return {
            seconds: seconds,
            minutes: minutes,
            hours: hours,
        }
    }

    const [time, setTime] = useState<dateStateType>(setDate)


    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((state: dateStateType) => {
                const newDate = setDate()

                return {
                    ...state,
                    ...newDate
                }
            })
        }, 1000)

        return () => {clearInterval(intervalId)}
    }, [])

    return (
        <>
            <span>{time.hours}:</span>
            <span>{time.minutes}:</span>
            <span>{time.seconds}</span>
        </>
    )
}
