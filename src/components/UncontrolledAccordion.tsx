import React, {useState} from "react";

export type AccordionPropsType = {
    title: string,
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    let [open, setOpen] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title} setOpen={setOpen} open={open}/>
            {open && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setOpen: (switcher: boolean) => void
    open: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    const onClickHandler = () => {
        props.setOpen(!props.open)
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
