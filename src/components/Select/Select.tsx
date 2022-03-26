import React, {ChangeEvent, useState} from "react";
import {itemType} from "../App";
import s from './Select.module.css'

type selectPropsType = {
    value: itemType
    changeSelectValue: (item: itemType) => void
    onSelectChange: (item: itemType) => void
    items: itemType[]
    sortItems: (value: string) => void
}

export const Select = (props: selectPropsType) => {

    let [on, setOn] = useState(false);

    const onClickHandler = () => {
        setOn(!on)
    }


    return (
        <div className={s.select}>
            <div onClick={onClickHandler} className={s.main}>{props.value.title}</div>
            <div className={s.wrapper}>
                {on ? <SelectBody
                    sortItems={props.sortItems}
                    items={props.items}
                    changeSelectValue={props.changeSelectValue} setOn={setOn}/> : null}
            </div>
        </div>
    )
}

type selectBodyPropsType = {
    sortItems: (value: string) => void
    items: itemType[]
    changeSelectValue: (item: itemType) => void
    setOn: (on: boolean) => void
}

const SelectBody = (props: selectBodyPropsType) => {
    const [inputValue, setInputValue] = useState('')
    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        let val = e.currentTarget.value
        setInputValue(val)
        props.sortItems(val)
    }

    const onClickHandler = (item: itemType) => {
    props.changeSelectValue(item)
        props.setOn(false)
    }

    return (
        <div className={s.list}>
            <ul>
                <li className={s.inputSelect}><input value={inputValue} onChange={changeInputValue}/></li>

                    {
                        props.items
                            .map(t => <li onClick={() => onClickHandler(t)} key={t.id}>{t.title}</li>)
                    }
            </ul>
        </div>
    )
}