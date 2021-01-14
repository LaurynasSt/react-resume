import './index.css';
import Pill from './components/Pill';
import ContentBlock from './components/ContentBlock';
import Select from './components/Select';
import Link from './components/Link';
import JobExperience from './components/JobExperience';
import List from './components/List';
import FooterBlock from './components/FooterBlock';
import Divider from './components/Divider';
import translations from './translations';
import { Fragment, useState } from 'react';

function App() {
  const [lang, setLang] = useState("en");

  return (
    <div className="App">
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
      <main>
        <section className="App-links-about">
          <ContentBlock title={translations[lang].personalLinks.title} className="App-links-ul">
            {translations.en.personalLinks.links.map(({ link, imgSrc, imgAlt, text }) => {
              return <Link
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                link={link}
              >
                {text}
              </Link>
            })}
          </ContentBlock>
          <ContentBlock title="ABOUT ME">
            <p className="App-about-text">
              {translations[lang].aboutMe}
            </p>
          </ContentBlock>
        </section>
        <section className="App-skills-section">
          <ContentBlock title={translations[lang].education.educationTitle} className="App-skills">
            {translations[lang].education.schools.map(({ schools, years, degree }, index, array) => {
              return <Fragment>
                <p className="App-educ-inner-text">
                  {schools}<br />
                  {years}<br />
                  {degree}
                </p>
                {index !== array.length - 1 && <Divider isShort />}
              </Fragment>
            })}
          </ContentBlock>
          <ContentBlock title={translations[lang].personalSkills.title} className="App-skills">
            {translations[lang].personalSkills.skills.map(({ text, level }) => {
              return <Pill color={level}>{text}</Pill>
            })}
          </ContentBlock>
          <ContentBlock title={translations[lang].technicalSkills.title} className="App-skills">
            {translations[lang].technicalSkills.skills.map(({ text, level }) => {
              return <Pill color={level}>{text}</Pill>
            })}
          </ContentBlock>
        </section>
        <ContentBlock title={translations[lang].workExperience.title} className="App-experience-container">
          {translations[lang].workExperience.work.map(({ title, company, years, description, workAchievments }) => {
            return <JobExperience
              title={title}
              company={company}
              years={years}
              description={description}
            >
              <List
                list={
                  workAchievments
                }
              />
            </JobExperience>
          })}
        </ContentBlock>
        <Divider />
      </main>
      <footer className="App-footer-container">
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
    </div>
  );
}

export default App;
