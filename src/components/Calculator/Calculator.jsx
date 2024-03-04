import "./Calculator.css"

import Result from "../Result/Result.jsx"

var range = (l,r) => new Array(r - l).fill().map((_,k) => k + l)

let nums = range(1, 10)

let btngrid = nums.map(
    (num)=>{
        return(
            <button> { num } </button>
        )
    }
)

function Calculator() {
    return(
        <>
            <div id="calculator">
                <Result />
                
                <div id="buttons">
                    <div id="grid">
                        { btngrid }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator