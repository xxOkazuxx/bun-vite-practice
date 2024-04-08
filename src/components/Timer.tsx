import { useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);

    // コンポーネントが生成されたときに一回だけ呼ぶ
    // -> useEffectの第二引数に空の配列を渡す
    useEffect(() => {
        window.setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);
    }, [])
    return (
        <>
            <h1>UseEffect練習</h1>
            <time>{time}</time>
            <span>秒経過</span>

        </>
    )
}

export default Timer