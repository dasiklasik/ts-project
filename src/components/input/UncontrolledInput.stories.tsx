import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'Uncontrolled Input',
    // component: UncontrolledInput,
}

export const Default = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <>
            <input value={value} onChange={onChangeHandler}/>
            <span>{value}</span>
        </>
    )
}

export const RefInput = () => {
    const [title, setTitle] = useState('')
    const newValue = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        if (newValue.current) {
            setTitle(newValue.current.value)
        }
    }

    return (
        <>
            <input ref={newValue}/>
            <button onClick={onClickHandler}>save</button>
            <span>actual value -- {title}</span>
        </>
    )
}

export const SaveInput = () => {
    const [title, setTitle] = useState('')
    const [actualTitle, setActualTitle] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickHandler = () => {
        setActualTitle(title)
    }
    return (
        <>
            <input onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>save</button>
            <span>{actualTitle}</span>
        </>
    )
}
