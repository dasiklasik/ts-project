import React, {useEffect, useMemo, useState} from "react";


export const UseStateTest = () => {


    const [count, setCount] = useState(0)


    useEffect(() => {
        document.title = 'hello'
    })

    const increaseMessageCount = () => {
        setCount(count+1)
    }

    return (
        <div>
            <h2>useState demo</h2>
            <button onClick={increaseMessageCount}>+</button>
            {count}
        </div>
    )
}
