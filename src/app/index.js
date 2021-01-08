import './index.css';
import Pill from './components/Pill';
import ContentBlock from './components/ContentBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-line">
          <form action="" method="POST">
            <select name="" id="">
              <option>Lithuanian</option>
              <option>English</option>
            </select>
          </form>
        </div>
        <section className="App-title-container">
          <h1 className="App-person-title">Laurio Pasaka</h1>
          <h3 className="App-person-prof">FAKER</h3>
        </section>
      </header>
      <main>
        <section className="App-links-about">
          <ContentBlock title="LINKS" className="App-links-ul">
            <div className="App-link">
              <img src="https://static.jopwell.com/organizationevent/fKM12af7a73b43884bf316ee670f94a30/LinkedIn-Logo.png" alt="linkedin" />
              <a href="https://lt.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN/none</a>
            </div>
            <div className="App-link">
              <img src="https://1000logos.net/wp-content/uploads/2017/06/Logo-Twitter.jpg" alt="TWITTER" />
              <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer">TWITTER/none</a>
            </div>
            <div className="App-link">
              <img src="https://www.flaticon.com/svg/static/icons/svg/38/38401.svg" alt="GITHUB" />
              <a href="https://github.com" target="_blank" rel="noreferrer">GITHUB/none</a>
            </div>
            <div className="App-link">
              <img src="https://image.flaticon.com/icons/png/512/60/60736.png" alt="BLOG" />
              <a href="http://pornhub.com" target="_blank" rel="noreferrer">BLOG/none</a>
            </div>
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
          <div className="App-experience-card">
            <div className="App-job-title-container">
              <h5 className="App-job-title">JOB POSITION</h5>
              <p className="App-job-company">Company</p>
              <p>2018 - present</p>
            </div>
            <p className="App-job-descr">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            <ul className="App-occupation">
              <li>Lorum Ipsum Dolor</li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </div>
          <div className="App-experience-card">
            <div className="App-job-title-container">
              <h5 className="App-job-title">JOB POSITION</h5>
              <p className="App-job-company">Company</p>
              <p>2018 - present</p>
            </div>
            <p className="App-job-descr">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            <ul className="App-occupation">
              <li>Lorum Ipsum Dolor</li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </div>
          <div className="App-experience-card">
            <div className="App-job-title-container">
              <h5 className="App-job-title">JOB POSITION</h5>
              <p className="App-job-company">Company</p>
              <p>2018 - present</p>
            </div>
            <p className="App-job-descr">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            <ul className="App-occupation">
              <li>Lorum Ipsum Dolor</li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </div>
        </ContentBlock>
      </main>
      <footer className="App-footer-container">
        <div>
          <h3 className="App-footer-title">ADDRESS</h3>
          <p>Imaginary St. 52.<br />Vilnius, Narnia</p>
        </div>
        <div>
          <h3 className="App-footer-title">CONTACT</h3>
          <p>
            <a className="App-contacts-link" href="tel:+37060000123">+37060000123</a>
            <br />
            <a className="App-contacts-link" href="mailto: faker@faker.com">faker@faker.com</a>
          </p>
        </div>
        <div>
          <h3 className="App-footer-title">SOCIAL</h3>
          <p>
            <a className="App-contacts-link" href="https://lt.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN/none</a>
            <br />
            <a className="App-contacts-link" href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer">TWITER/none</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
