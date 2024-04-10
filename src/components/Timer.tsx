import { useEffect, useLayoutEffect, useState } from 'react'

const Timer = () => {
    const [isDisp, setIsDisp] = useState(true);
    return (
        <>
            <h1>UseEffect練習</h1>
            <div>
                {isDisp && <Timer2 />}
            </div>
            <button onClick={() => setIsDisp(prev => !prev)}>
                {isDisp ? '非表示' : '表示'}
            </button >
        </>
    )
}

const Timer2 = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // コンポーネントが生成されたときに一回だけ呼ぶ
    // -> useEffectの第二引数に空の配列を渡す
    useEffect(() => {
        let intervalId: number | null = null;
        if (isRunning) {
            intervalId = window.setInterval(() => {
                console.log('interval called');
                setTime(prev => prev + 1);
                window.localStorage.setItem('counter', time.toString());
            }, 1000);
        }
        // コンポーネントが破棄されるときに呼ぶ
        return () => {
            window.clearInterval(intervalId as number);
        };
    }, [isRunning])

    // useLayoutEffectはuseEffectよりも先に実行される
    useLayoutEffect(() => {
        const _time = parseInt(window.localStorage.getItem('counter') as string);
        if (!isNaN(_time)) {
            setTime(_time);
        }
    }, [])

    // useEffect(() => {
    //     document.title = 'counter: ' + time;
    //     window.localStorage.setItem('counter', time.toString());
    //     // 依存配列に設定した変数をuseEffect内で更新すると無限ループになるため注意
    //     // setTime(prev => prev + 1);
    // }, [time])

    const toggle = () => {
        setIsRunning(prev => !prev);
    }

    const reset = () => {
        setIsRunning(false);
        setTime(0);
    }

    return (
        <>
            <h3>
                <time>{time}</time>
                <span>秒経過</span>
            </h3>
            <div>
                <button onClick={toggle}>{isRunning ? '一時停止' : 'スタート'}</button>
                <button onClick={reset}>リセット</button>
            </div>
        </>
    )
}

export default Timer