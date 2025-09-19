import { use } from "react";

const { useState, useEffect } = React;

export function FruitsSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }
        const timeoutId = setTimeout(async() => {
            try {
                const response = await fetch(`https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`)
                const data = await response.json();
                
            } catch {}
        }, 700)
    }, [query]);
    }
    return (
        <div id="search-container">
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="search-input">Search for fruits:</label>
                <input type="search" id="search-input" value={query} onChange={(e) => {
                    setQuery(e.target.value);
                }} />
            </form>
            <div id="results">
                {results.length > 0 ? results.map((fruit, key) => (
                    <p className="result-item" key={key}>{fruit}</p>
                )) : <p>No results found</p>} 
            </div>
        </div>
    )
}