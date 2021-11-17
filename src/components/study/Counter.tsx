import React , {useState} from 'react'



export interface Count {
    counter : number
}


function Counter() {

    const [number, setNumber ] = useState(0);

    const Increment = () => {
        setNumber(
            number + 1
        )
    }
    
    const Decrement = () => {
        setNumber(
            number - 1
        )
    }



    return (
        <>
            <div>
                숫자 증가 시키기!
            </div>
            <div>
                {number}
            </div>
            <button onClick = {Increment}>+</button>
            <button onClick = {Decrement}>-</button>
        </>
    )
}

export default Counter
