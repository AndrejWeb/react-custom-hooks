import { useCounter } from "./useCounter";

const Counter = ({startCount = 0}) => {

    const { count, increase, decrease, reset } = useCounter(startCount);

    return (<div>
        <h1>Counter</h1>
        <button onClick={increase}>Increase +</button>
        <button onClick={decrease}>Decrease -</button>
        <button onClick={reset}>Reset</button>
        <h1>{ count }</h1>
    </div>)
}

export default Counter;
