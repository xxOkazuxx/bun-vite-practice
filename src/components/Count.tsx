import { useState } from 'react'

const Count = () => {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)
    const reset = () => {
        setCountA(0)
        setCountB(0)
    }
    return (
        <>
            <div>
                <button onClick={() => setCountA(countA + 1)}>Click me to increment</button>
            </div>
            <div>
                <button onClick={() => setCountB(countB - 1)}>Click me to decrement</button>
            </div>
            <div>
                <button onClick={() => reset()}>Reset</button>
            </div>
            <div>Count : {countA} {countB}</div>
        </>
    )
}

export default Count