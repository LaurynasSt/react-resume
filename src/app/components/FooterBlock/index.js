import './index.css';

function FooterBlock({ children, title = "", topText = "", bottomText = ""}) {
    
    
    return (
        <div>
            <h3 className="App-footer-title">{title}</h3>
            <p>{children}</p>
        </div>
    );
}

export default FooterBlock;