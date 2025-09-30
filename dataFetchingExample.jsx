import { useState, useEffect } from 'react';


const FetchPosts = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /* useEffect(() => {
        fetch('https://jsonplaceholde.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []); */
    /* You can make things better by using async/await instead of the .then() syntax. That means you have to have a separate function inside the useEffect because you cannot prefix useEffect with the async keyword: */

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');

                if (!response.ok) {
                    throw new Error("Network response was no ok");
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <ul>
            {data.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};

export default FetchPosts;