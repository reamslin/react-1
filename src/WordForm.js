import React, { useState } from "react";

function WordForm({ submit }) {
    const [formData, setFormData] = useState({ noun: "", noun2: "", adjective: "", color: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(f => ({ ...f, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="noun"
                name="noun"
                value={formData.noun}
                onChange={handleChange} />
            <input
                placeholder="noun 2"
                name="noun2"
                value={formData.noun2}
                onChange={handleChange} />
            <input
                placeholder="adjective"
                name="adjective"
                value={formData.adjective}
                onChange={handleChange} />
            <input
                placeholder="color"
                name="color"
                value={formData.color}
                onChange={handleChange} />

            <button>Submit</button>
        </form>
    )
}

export default WordForm;