import { useState, useEffect } from "react";
import useDebounce from "./hooks/usedebounce";

const footballers = [
    'Lionel Messi', 'Cristiano Ronaldo', 'Neymar Jr',
    'Kylian Mbappe', 'Mohamed Salah', 'Sadio Mane',
    'Kevin De Bruyne', 'Robert Lewandowski', 'Harry Kane',
    'Sergio Ramos', 'Virgil van Dijk', 'Alisson Becker',
    'Joshua Kimmich', 'Manuel Neuer', 'Karim Benzema',
    'Thibaut Courtois', 'Eden Hazard', 'Raheem Sterling',
    'Bruno Fernandes', 'Trent Alexander-Arnold', 'Son Heung-min',
    'Pierre-Emerick Aubameyang', 'Sergio Aguero', 'Luis Suarez',
    'Luka Modric', 'Casemiro', 'Frenkie de Jong', 'Gerard Pique',
    'Marc-Andre ter Stegen', 'Keylor Navas', 'Angel Di Maria',
    "N'Golo Kante", 'Kai Havertz', 'Timo Werner', 'Hakim Ziyech',
    'Christian Pulisic', 'Mason Mount', 'Olivier Giroud', 'Tammy Abraham',
    'Kepa Arrizabalaga', 'Ben Chilwell', 'Thiago Silva', 'Kurt Zouma',
    'John Terry', 'Didier Drogba', 'Frank Lampard', 'Ashley Cole', 'Petr Cech',
];

const FootballerSearch = () => {
    const [query, setQuery] = useStatre("");
    const debouncedQuery = useDebounce(query, 1000);

    useEffect(() => {
        if (debouncedQuery) {
            const results = footballers.filter((footballer) =>
                footballer.toLowerCase().includes(debouncedQuery.toLowerCase()),
            );
            console.log("Search resuls:", results);
        } else {
            console.log("Search results: []");
        }
    }, [debouncedQuery]);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Footballer Search App</h1>
            <div style={{ textAlign: "center" }}>
                <input
                    style={{ padding: "0.5rem", width: "30%" }}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a footballer..."
                />
            </div>

        </>
    );
};

export default FootballerSearch;