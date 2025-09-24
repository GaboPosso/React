import { useState } from "react";

function App() {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your name</label> <br />
                <input type="text" id="name" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App;