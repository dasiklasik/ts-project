import React, {useState} from "react";

export const ReactMemoTest = () => {
    const [count, setCount] = useState(0)
    const [users, serUsers] = useState(['Dasha', 'Anna', 'Masha'])

    const increaseMessageCount = () => {
        setCount(count+1)
    }

    return (
        <div>
            <h2>React.memo demo</h2>
            <button onClick={increaseMessageCount}>+</button>
            <Counter count={count}/>
            <Users users={users}/>
        </div>
    )
}

const Counter = (props: any) => {
    console.log('Counter rendering')
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('Users rendering')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)