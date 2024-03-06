import "./Body.css"

import Button from "../Button/Button.jsx"

function Body() {

    let buttons = [
        "C", "⌫", "%", "÷",
        "7", "8", "9", "x",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", ",", "(", ")", "="
    ]

    let btns = buttons.map(
        (btn) => {
            return (
                <Button class={ getClassName(btn) } value={btn} />
            )
        }
    )

    return (
        <div id="grid">
            { btns }
        </div>
    )
}

function getClassName(btn) {
    let numbers = ["0", ",", "()", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let operations = ["+", "-", "x", "÷", "%"]
    let equals = ["="]
    let del = ["⌫"]
    let clear = ["C"]

    switch (true) {
        case numbers.includes(btn):
            return "number"
        case operations.includes(btn):
            return "operation"
        case equals.includes(btn):
            return "equals"
        case del.includes(btn):
            return "delete"
        case clear.includes(btn):
            return "clear"
    }
}

export default Body