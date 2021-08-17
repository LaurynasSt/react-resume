import './index.css';

function JobExperience({ title = "", company = "", years = "", description = "", children }) {
    return (
        <div className="App-experience-card">
            <div className="App-job-title-container">
                <h5 className="App-job-title">{title}</h5>
                <p className="App-job-company">{company}</p>
                <p className="App-job-years">{years}</p>
            </div>
            <p className="App-job-descr">
                {description}
            </p>
            {children}
        </div>
    );
}

export default JobExperience;