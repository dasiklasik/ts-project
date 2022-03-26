import React, {useState} from 'react';
import '../App.css';
import Accordion from "./Accordion";
import Rating from "./Rating";
import OnOff from './onOff'
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {UncontrolledRating} from "./UncontrolledRating";
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {Select} from "./Select/Select";
import {SecondSelect} from "./Select/SecondSelect";

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
        alert('Item ' + id + ' was clicked!')
    }

    const [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false)


    let initialItems = [
        {title: 'хлеб', id: '1'},
        {title: 'молоко', id: '2'},
        {title: 'дрожжи', id: '3'},
        {title: 'молочная сыворотка', id: '4'},
        {title: 'курица', id: '5'},
    ]

    const [items, setItems] = useState<Array<itemType>>(initialItems)

    const sortItems = (value: string) => {
        if (value === '') {
            setItems(initialItems)
        } else {
            setItems(initialItems.filter(i => i.title.includes(value)))

        }

    }

    const [value, setValue] = useState(items[0])


    const changeSelectValue = (item: itemType) => {
        setValue(item)
        setItems(initialItems)
    }


    return (
        <div>
            {/*<select>*/}
            {/*    <option>1</option>*/}
            {/*    <option>2</option>*/}
            {/*    <option>2</option>*/}
            {/*    <option>2</option>*/}
            {/*    <option>2</option>*/}
            {/*    <option>2</option>*/}
            {/*    <option>2</option>*/}
            {/*    <option>2</option>*/}
            {/*</select>*/}
            <SecondSelect changeValue={setValue}
                          value={value}
                          items={items}/>
            {/*<Select value={value}*/}
            {/*        onSelectChange={setValue}*/}
            {/*        items={items}*/}
            {/*        sortItems={sortItems}*/}
            {/*        changeSelectValue={changeSelectValue}/>*/}
            {/*<UncontrolledOnOff onChange={setOn}/>*/}
            {/*<div>{on.toString()}</div>*/}
            {/*<UncontrolledAccordion title={'Menu'} />*/}
            {/*<UncontrolledRating/>*/}
            {/*<Rating value={ratingValue} setRatingValue={setRatingValue}/>*/}
            {/*<PageTitle title={'This is App component.'} />*/}
            {/*Article 1*/}

            {/*<Accordion title={'My menu'}*/}
            {/*           open={accordionOpen}*/}
            {/*           onClick={setAccordionOpen}*/}
            {/*           itemArray={items}*/}
            {/*onItemClick={onItemClick}/>*/}
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










