const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            className={`theme-toggle ${theme}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? '☀️' : '🌙' }
        </button>
    )
}

export default ThemeToggle