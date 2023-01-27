const Badge = ({ children, active, onSelect }) => {
    return (
        <button
            className={`badge ${active ? "active" : ""}`}
            onClick={onSelect}
        >
            {children}
        </button>
    );
};

export default Badge;
