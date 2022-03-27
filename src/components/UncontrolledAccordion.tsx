import React, {useReducer, useState} from "react";

export type AccordionPropsType = {
    title: string,
}

type actionType = {
    type: string
}

type stateType = {
    open: boolean
}

const setOpenAC = () => {
    return {
        type: 'SET-OPEN',
    }
}

const initialState: stateType = {
    open: false
}

export const reducer = (state: stateType, action: actionType): stateType => {
    debugger
    switch (action.type) {
        case 'SET-OPEN': {
            let newState = {...state};
            return {...newState, open: !newState.open}
        }
    }

    return state
}



export function  UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    debugger
    // let [open, setOpen] = useState(false)
    const [open, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <AccordionTitle title={props.title} setOpen={dispatch} open={open.open}/>
            {open.open && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setOpen: (switcher: actionType) => void
    open: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    const onClickHandler = () => {
        props.setOpen(setOpenAC())
    }
    return <h3 onClick={onClickHandler}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
