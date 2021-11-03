import React from "react";

type AccordionPropsType = {
    title: string,
    open: boolean
    onClick: (open: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.onClick} open={props.open}/>
            {props.open && <AccordionBody/>}
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
    return <h3 onClick={() => props.onClick(!props.open)}>{props.title}</h3>
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

export default Accordion;
