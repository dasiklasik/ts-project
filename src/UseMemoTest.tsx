import React, {useMemo, useState} from "react";

export const DifficultCounting = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)


    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResA = resultA
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++;
                let a = Math.random()
            }

            tempResA *= i
        }
        return tempResA
    }, [a])

    resultB = useMemo(() => {
        let tempResB = resultB
        for (let j = 1; j <= b; j++) {
            tempResB *= j
        }
        return tempResB
    }, [b])

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}


export const UseMemoTest2 = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Dasha', 'Anna', 'Masha'])

    const increaseMessageCount = () => {
        setCount(count+1)
    }

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return (
        <div>
            <h2>React.memo demo</h2>
            <button onClick={increaseMessageCount}>+</button>
            {count}
            <Users users={newArray}/>
        </div>
    )
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('Users rendering')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)