import React from "react";
import {AccordionPropsType, UncontrolledAccordion,} from "./UncontrolledAccordion";

export default  {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {
    title: { control: 'text' },
  }
}

type defaultType = AccordionPropsType & {
    arg: argType
}

type argType = {
    title: string
}

export const Default = (args: defaultType) => <UncontrolledAccordion {...args}/>

export const Primary = Default.bind({});

Primary.arg = {
    title: 'title'
}