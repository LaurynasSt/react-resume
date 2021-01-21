import Select from "./components/Select";

import translations from "../../translations";

import "./index.css";

function Header({ lang, setLang }) {

    return (
        <header className="App-header">
            <div className="App-header-line">
                <Select onChange={setLang}
                    options={[
                        { value: "en", children: "English" },
                        { value: "lt", children: "Lietuviu" },
                    ]}
                />
            </div>
            <section className="App-title-container">
                <h1 className="App-person-title">Laurio Pasaka</h1>
                <h3 className="App-person-prof">{translations[lang].profession}</h3>
            </section>
        </header>
    );
}

export default Header;
