import "./Calculator.css"

import Result from "../Result/Result.jsx"
import Body from "../Body/Body.jsx"

function Calculator() {
    return(
        <>
            <div id="calculator">
                <Result />
                <Body />
            </div>
        </>
    )
}

export default Calculator