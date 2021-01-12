import './index.css';
import Pill from './components/Pill';
import ContentBlock from './components/ContentBlock';
import Select from './components/Select';
import Link from './components/Link';
import JobExperience from './components/JobExperience';
import List from './components/List';
import FooterBlock from './components/FooterBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-line">
          <Select
            options={[
              { value: "en", children: "English" },
              { value: "lt", children: "Lietuviu" },
            ]}
          />
        </div>
        <section className="App-title-container">
          <h1 className="App-person-title">Laurio Pasaka</h1>
          <h3 className="App-person-prof">FAKER</h3>
        </section>
      </header>
      <main>
        <section className="App-links-about">
          <ContentBlock title="LINKS" className="App-links-ul">
            <Link
              image
              imgSrc="https://static.jopwell.com/organizationevent/fKM12af7a73b43884bf316ee670f94a30/LinkedIn-Logo.png"
              imgAlt="linkedin"
              link="https://lt.linkedin.com/"
            >
              LINKEDIN/none
            </Link>
            <Link
              image
              imgSrc="https://1000logos.net/wp-content/uploads/2017/06/Logo-Twitter.jpg"
              imgAlt="twitter"
              link="https://twitter.com/?lang=en"
            >
              TWITTER/none
            </Link>
            <Link
              image
              imgSrc="https://www.flaticon.com/svg/static/icons/svg/38/38401.svg"
              imgAlt="github"
              link="https://github.com/"
            >
              GITHUB/orezdrah
            </Link>
            <Link
              image
              imgSrc="https://image.flaticon.com/icons/png/512/60/60736.png"
              imgAlt="blog"
              link="https://pornhub.com/"
            >
              LINKEDIN/none
            </Link>
          </ContentBlock>
          <ContentBlock title="ABOUT ME">
            <p className="App-about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </ContentBlock>
        </section>
        <section className="App-skills-section">
          <ContentBlock title="EDUCATION" className="App-educ-container">
            <p className="App-educ-inner-text">
              SCHOOL NAME<br />
                2009 - 2013<br />
                Degree
              </p>
            <div className="line-educ"></div>
            <p className="App-educ-inner-text">
              SCHOOL NAME<br />
                2009 - 2013<br />
                Degree
              </p>
          </ContentBlock>
          <ContentBlock title="PERSONAL SKILLS" className="App-skills">
            <Pill color="green">TEAMWORK</Pill>
            <Pill color="yellow">ORGANIZATION</Pill>
            <Pill color="brown">COMMUNICATION</Pill>
          </ContentBlock>
          <ContentBlock title="TECHNICAL SKILLS" className="App-skills">
            <Pill color="green">HTML</Pill>
            <Pill color="green">CSS/SCSS</Pill>
            <Pill color="brown">PHP</Pill>
            <Pill color="yellow">JAVASCRIPT</Pill>
            <Pill color="yellow">REACT.JS</Pill>
          </ContentBlock>
        </section>
        <ContentBlock title="WORK EXPERIENCE" className="App-experience-container">
          <JobExperience
            title="JOB POSITION"
            company="Company"
            years="2018 - present"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          >
            <List
              list={[
                "labas", "viso gero"
              ]}
            />
          </JobExperience>
          <JobExperience
            title="JOB POSITION"
            company="Company"
            years="2018 - present"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          >
            <List
              list={[
                "labas", "viso gero"
              ]}
            />
          </JobExperience>
          <JobExperience
            title="JOB POSITION"
            company="Company"
            years="2018 - present"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          >
            <List
              list={[
                "labas", "viso gero"
              ]}
            />
          </JobExperience>
        </ContentBlock>
      </main>
      <footer className="App-footer-container">
        <FooterBlock
          title="ADDRESS"
        >
        Vilniaus g. 52. <br />
        Vilnius, Lietuva
        </FooterBlock>
        <FooterBlock
          title="CONTACT"
        >
        <Link
        href="tel:86880884"
        >
        86880884
        </Link>
        <br />
        <Link
        href="tel:86880884"
        >
        orez@orez.orez
        </Link>
        </FooterBlock>
        <FooterBlock
          title="SOCIAL"
        >
        <Link link="https://linkedin.com/"
        >
          LINKEDIN/none
        </Link>
        <br />
        <Link link="https://twitter.com/"
        >
          TWITTER/none
        </Link>
        </FooterBlock>
      </footer>
    </div>
  );
}

export default App;
