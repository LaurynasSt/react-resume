function Select({ options = [] }) {
    return (
        <select>
            {options.map((optionData) => (
                <option {...optionData} />
            ))}
        </select>
    );
}

export default Select;