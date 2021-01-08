import './index.css';
import Divider from '../Divider';

function ContentBlock({ children, title, className = "" }) {
    return (
        <div className="content-box">
            <h4>{title}</h4>
            <Divider />
            <div className={className}>{children}</div>
        </div>
    );
}

export default ContentBlock;