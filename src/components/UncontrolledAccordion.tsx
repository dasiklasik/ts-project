import React, {useState} from "react";

type AccordionPropsType = {
    title: string,
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    let [open, setOpen] = useState(false)

    const toggleAccordion = () => {
        setOpen(!open)
    }

    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={toggleAccordion}>TOGGLE</button>
            {open && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return <h3>{props.title}</h3>
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
