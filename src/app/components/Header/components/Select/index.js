import "./index.css";

function Select({ options = [], onChange }) {

    return (
        <select onChange={(event) => {
            onChange(event.target.value);
        }}>
            {options.map((optionData) => (
                <option key={optionData.value} {...optionData} />
            ))}
        </select>
    );
}

export default Select;