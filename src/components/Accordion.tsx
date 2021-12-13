import React from "react";
import {itemType} from "./App";

type AccordionPropsType = {
    title: string,
    open: boolean
    onClick: (open: boolean) => void
    itemArray: itemType[]
    onItemClick: (id: string) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.onClick} open={props.open}/>
            {props.open && <AccordionBody itemArray={props.itemArray} onClick={props.onItemClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: (open: boolean) => void
    open: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    const headerOnClickHandler = () => props.onClick(!props.open)
    return <h3 onClick={headerOnClickHandler}>{props.title}</h3>
}

type accordionBodyPropsType = {
    itemArray: itemType[]
    onClick: (id: string) => void
}

function AccordionBody(props: accordionBodyPropsType) {
    console.log('AccordionBody rendering');

    return (
        <ul>
            {props.itemArray.map((t, index) => <li onClick={() => props.onClick(t.id)} key={t.id}>{t.title}</li>)}
        </ul>
    )
}

export default Accordion;
