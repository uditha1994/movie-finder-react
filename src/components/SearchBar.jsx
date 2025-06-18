import { useState } from "react";
import { motion } from "framer-motion";

const SearchBar = ({ setSeachTerm, theme }) => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setSeachTerm(input)
    }

    return (
        <motion.form
            className={`search ${theme}`}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <input
                type="text"
                placeholder="Search for movies..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
                <span className="search-icon">🔍</span>Search
            </button>
        </motion.form>
    )
}

export default SearchBar