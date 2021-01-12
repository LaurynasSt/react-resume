import './index.css';

function List({ list = [] }) {
    return (
        <ul>
            {list.map((value) => (
                <li>{value}</li>
            ))}
        </ul>
    );
}

export default List;