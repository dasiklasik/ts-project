import React, {useState, KeyboardEvent, useEffect} from "react";
import {itemType} from "../App";
import s from './SecondSelect.module.css'

type SecondSelectPropsType = {
    changeValue: (value: itemType) => void
    value: itemType
    items: Array<itemType>
}

export const SecondSelect = ({
                                 value,
                                 items,
                                 changeValue,
                                 ...props
                             }: SecondSelectPropsType) => {


    let [on, setOn] = useState(false);
    const [hoveredElValue, setHoveredElValue] = useState(value)

    const changeModeHandler = () => {
        setOn(!on)
    }

    useEffect(() => {
        setHoveredElValue(value)
    }, [value])

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown") {
            for (let i = 0; i < items.length; i++) {
                if (items[i] === hoveredElValue) {
                    if (items[i+1]) {
                        changeValue(items[i+1])
                        break
                    }
                }
            }

        } else if (e.key === "ArrowUp") {
            for (let i = 0; i < items.length; i++) {
                if (items[i] === hoveredElValue) {
                    if (items[i-1]) {
                        changeValue(items[i-1])
                        break
                    }
                }
            }
        }
    }




    return (
        <div className={s.select} tabIndex={0} onKeyUp={onKeyUpHandler} onBlur={changeModeHandler}>
            <h3 className={s.selectHeader}
                onClick={changeModeHandler}>{value.title}</h3>
            <div className={s.items}>
                {on && items.map(i => {
                    const hoveredStyle = hoveredElValue.id === i.id
                        ? s.hover : ''

                    const onMouseEnterHandler = () => {
                        setHoveredElValue(i)
                    }
                    return (
                        <div onMouseEnter={onMouseEnterHandler} className={hoveredStyle} onClick={() => {
                            changeValue(i)
                            setHoveredElValue(i)
                            setOn(false)
                        }} key={i.id}>{i.title}</div>
                    )
                })}
            </div>
        </div>
    )
}