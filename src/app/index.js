import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { useState } from 'react';

import './index.css';

function App() {
  const [lang, setLang] = useState("en");

  return (
    <div className="App">
      <Header lang={lang} setLang={setLang}></Header>
      <Main lang={lang}></Main>
      <Footer lang={lang}></Footer>
    </div>
  );
}

export default App;