import "./Result.css"

function Result() {
    return(
        <>
            <div className="center" id="result-box">
                <div id="result-box2">
                    <div>
                        <div id="expression" contentEditable="true">2 + 2</div>
                    </div>
                    <div>
                        <div id="result">= 4</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result