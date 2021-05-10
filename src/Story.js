import React from "react";

function Story({ words, restart }) {

    return (
        <div className="Story">
            <p>There was a {words.color} {words.noun} who loved a {words.adjective} {words.noun2}.</p>
            <button onClick={restart}>Restart</button>
        </div>
    )
}
export default Story;