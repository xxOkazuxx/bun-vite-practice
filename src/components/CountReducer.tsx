import { useReducer } from 'react'

// useReducerはuseStateの書き換えに使用
const CountReducer = () => {
    const [state, dispatch] = useReducer((prev: any, { type }: any) => {
        switch (type) {
            case 'increment':
                return prev + 1;
            case 'decrement':
                return prev - 1;
            case 'reset':
                return 0;
            default:
                throw new Error("不明なアクションです");
        }
    }, 0);

    const increment = () => {
        dispatch({ type: 'increment' });
    };
    const decrement = () => {
        dispatch({ type: 'decrement' });
    };
    const reset = () => {
        dispatch({ type: 'reset' });
    };

    return (
        <>
            <h1>UseReducer練習</h1>
            <div>
                <button onClick={increment}>Click me to increment</button>
            </div>
            <div>
                <button onClick={decrement}>Click me to decrement</button>
            </div>
            <div>
                <button onClick={reset}>Reset</button>
            </div>
            <div>Count : {state}</div>
        </>
    )
}

export default CountReducer
