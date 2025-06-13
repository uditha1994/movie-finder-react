import { useState } from "react";

const SearchBar = ({ setSeachTerm }) => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setSeachTerm(input)
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search for movies..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar