import './index.css';

function Pill({ children, color, id }) {
    const assignedColor = ["green", "yellow", "brown", "blue"].includes(color)
        ? color
        : "grey";

    return (
        <div id={id} className="skill">
            <div className="skill-margin">
                <span className={`pill pill-${assignedColor}`}>{children}</span>
            </div>
        </div>
    );
}

export default Pill