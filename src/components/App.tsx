import React, {useState} from 'react';
import '../App.css';
import Accordion from "./Accordion";
import Rating from "./Rating";
import OnOff from './onOff'
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {UncontrolledRating} from "./UncontrolledRating";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

// type ratingValueType = {
//     ratingValue: 0 | 1 | 2 | 3 | 4| 5
// }

export type itemType = {
    title: string,
    id: string
}

function App() {
    console.log('App rendering');

    const onItemClick = (id: string) => {
        alert('Item ' + id +' was clicked!')
    }

    const [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4| 5>(0)
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
    let [on, setOn] = useState(false);



    const items: Array<itemType> = [
        {title: '1', id: '1'},
        {title: '2', id: '2'},
        {title: '3', id: '3'}
    ]

  return (
    <div>
        {/*<UncontrolledOnOff onChange={setOn}/>*/}
        {/*<div>{on.toString()}</div>*/}
        {/*<UncontrolledAccordion title={'Menu'} />*/}
        {/*<UncontrolledRating/>*/}
        {/*<Rating value={ratingValue} setRatingValue={setRatingValue}/>*/}
        {/*<PageTitle title={'This is App component.'} />*/}
        {/*Article 1*/}

        <Accordion title={'My menu'}
                   open={accordionOpen}
                   onClick={setAccordionOpen}
                   itemArray={items}
        onItemClick={onItemClick}/>
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










