// import {Select} from "./Select";
import React, {useState} from "react";
// import {itemType} from "../App";
//
// export default {
//     title: 'Select',
//     component: Select,
// }
//
// export const DefautSelect = () => {
//
//
//     let initialItems = [
//         {title: 'хлеб', id: '1'},
//         {title: 'молоко', id: '2'},
//         {title: 'дрожжи', id: '3'},
//         {title: 'молочная сыворотка', id: '4'},
//         {title: 'курица', id: '5'},
//     ]
//
//     let [on, setOn] = useState(false);
//     const [items, setItems] = useState<Array<itemType>>(initialItems)
//
//     const sortItems = (value: string) => {
//         if (value === '') {
//             setItems(initialItems)
//         } else {
//             setItems(initialItems.filter(i => i.title.includes(value)))
//
//         }
//
//     }
//
//     const [value, setValue] = useState(items[0])
//
//
//     const changeSelectValue = (item: itemType) => {
//         setValue(item)
//         setOn(false)
//         setItems(initialItems)
//     }
//     return (
//         <Select value={value}
//                 onSelectChange={setValue}
//                 items={items}
//                 sortItems={sortItems}
//                 on={on}
//                 setOn={setOn}
//                 changeSelectValue={changeSelectValue}/>
// )
// }