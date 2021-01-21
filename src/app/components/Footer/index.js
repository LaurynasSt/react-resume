import FooterBlock from "./components/FooterBlock";
import Link from "../../components/Link";

import translations from "../../translations";

import "./index.css";


function Footer({ lang }) {
    return (
        <footer>
            {translations[lang].footer.map(({ title, items }) => {
                return <FooterBlock title={title}>
                    {items.map(({ text, link }) => {
                        const Component = link ? Link : "p"
                        return (
                            <Component link={link}>{text}</Component>
                        );
                    })}
                </FooterBlock>
            })}
        </footer>
    )
}

export default Footer;