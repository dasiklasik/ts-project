import React, {useMemo, useState} from "react";


const difficultCounting = () => {
    //some difficult counting
    return 45366363
}

export const UseStateTest = () => {


    const [count, setCount] = useState(difficultCounting)

    const changer = () => {
      return count + 1
    }

    const increaseMessageCount = () => {
        setCount(changer)
    }

    return (
        <div>
            <h2>useState demo</h2>
            <button onClick={increaseMessageCount}>+</button>
            {count}
        </div>
    )
}
