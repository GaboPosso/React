const { useState } = React;

const items = ["Apples", "Bananas", "Strawberries", "Blueberries", "Mangoes", "Pineapple", "Lettuce", "Broccoli", "Paper Towels", "Dish Soap"];
export const ShoppingList = () => {

    const [query, setQuery] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);

    const filteredItems = items.filter((item) => {
        return (
            item.toLowerCase().includes(query.toLowerCase())
        )
    })

    const toggleItem = (item) => {
        setSelectedItems()
    }
    return (
        <div className="container">
            <h1>Shopping List</h1>
            <form>
                <label htmlFor="search">Search for an item:</label>
                <input value={query} onChange={(e) => {
                    setQuery(e.target.value)
                }} type="search" id="search" placeholder="Search..." aria-describedby="search-description" />
                <p id="search-description">Type to filter the list below:</p>
                <ul>
                    {filteredItems.map((item) => {
                        return (
                            <li key={item}>
                                <label>
                                <input type="checkbox" onChange={() => {
                                    toggleItem(item)
                                }} />
                                {item}
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </form>
        </div>
    );
};