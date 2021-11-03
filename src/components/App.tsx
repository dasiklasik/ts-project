import React, {useState} from 'react';
import '../App.css';
import Accordion from "./Accordion";
import Rating from "./Rating";
import OnOff from './onOff'
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {UncontrolledRating} from "./UncontrolledRating";

// type ratingValueType = {
//     ratingValue: 0 | 1 | 2 | 3 | 4| 5
// }

function App() {
    console.log('App rendering');

    const [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4| 5>(0)
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false)

  return (
    <div>
        {/*<OnOff/>*/}
        {/*<UncontrolledAccordion title={'Menu'} />*/}
        {/*<UncontrolledRating/>*/}
        <Rating value={ratingValue} setRatingValue={setRatingValue}/>
        {/*<PageTitle title={'This is App component.'} />*/}
        {/*Article 1*/}

        <Accordion title={'My menu'} open={accordionOpen} onClick={setAccordionOpen}/>
        {/*Article 2*/}
        {/*<Accordion title={'Users'} collapsed={true}/>*/}
        {/*<Rating value={3}/>*/}
    </div>
  );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering');
    return (
        <h1>{props.title}</h1>
    )
}

export default App;










