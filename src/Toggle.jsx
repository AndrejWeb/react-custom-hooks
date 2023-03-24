import { useToggle } from "./useToggle";

const Toggle = () => {

    const {state:isVisible, toggle} = useToggle()
    const {state:isVisible2, toggle: toggle2} = useToggle(true)

    return (
        <div>
            <h1>Toggle Text</h1>
            <button onClick={toggle}>{ isVisible ? "Hide" : "Show" }</button>
            { isVisible && <h2>The text is shown now</h2>}
            <hr/>
            <button onClick={toggle2}>{ isVisible2 ? "Hide" : "Show" }</button>
            { isVisible2 && <h2>The text is shown now</h2>}
        </div>
    )
}

export default Toggle;
