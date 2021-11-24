import React, {ChangeEvent, useState} from "react";
import {UncontrolledAccordion} from "../UncontrolledAccordion";

export default {
    title: "Controlled Elements",
    // component: UncontrolledAccordion
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        setParentValue(e.currentTarget.value)
    }

    return (
        <input value={parentValue} onChange={onChangeHandler}/>
    )
}

export const ControlledCheckbox = () => {

    const [checkedInput, setCheckedInput] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        setCheckedInput(e.currentTarget.checked)
    }

    return (
        <input type={'checkbox'} checked={checkedInput} onChange={onChangeHandler}/>
    )
}

export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>(undefined)

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        debugger
      setValue(e.currentTarget.value)
    }
    return (
        <select value={value} onChange={onChangeHandler}>
            <option>none</option>
            <option value={'1'}>HTML</option>
            <option value={'2'}>CSS</option>
            <option value={'3'}>JS</option>
        </select>
    )
}