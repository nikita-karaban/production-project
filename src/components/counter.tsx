import { useState } from "react"
// import './counter.scss';
import * as styles from './counter.scss'

export function Counter(): JSX.Element {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className={styles.Counter}>{count}</h1>

            <button onClick={() => setCount((count) => ++count)}>counter</button>
        </>
    )
}