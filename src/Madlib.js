import React, { useState } from "react";
import Story from "./Story.js";
import WordForm from "./WordForm.js";

function Madlib() {
    const [words, setWords] = useState(null);

    return (
        <div className="Madlib">
            {words ?
                <Story words={words}
                    restart={() => setWords(null)} />
                :
                <WordForm submit={setWords} />}
        </div>
    );
}

export default Madlib;