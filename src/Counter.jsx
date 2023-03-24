import { useCounter } from "./useCounter";

const Counter = () => {

    const { count, increase, decrease, reset } = useCounter();

    return (<div>
        <h1>Counter</h1>
        <button onClick={increase}>Increase +</button>
        <button onClick={decrease}>Decrease -</button>
        <button onClick={reset}>Reset</button>
        <h1>{ count }</h1>
    </div>)
}

export default Counter;
