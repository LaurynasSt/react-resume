import './index.css';

function Pill({ children, color, id }) {
const assignedColor = ["green", "yellow", "brown"].includes(color)
    ? color
    : "grey";

    return (
        <div id={id} className="skill">
            <span className={`pill-${assignedColor}`}>{children}</span>
        </div>
    );
}

export default Pill