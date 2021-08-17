import './index.css';

function FooterBlock({ children, title = "" }) {
    return (
        <div>
            <h3 className="App-footer-title">{title}</h3>
            <p className="App-footer-text">{children}</p>
        </div>
    );
}

export default FooterBlock;