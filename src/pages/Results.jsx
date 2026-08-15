import { analyzeResume } from "../skillAnalyzer";

function Results({ data, onBack }) {
  const analysis = analyzeResume(
    data.resumeText,
    data.jobDescription
  );

  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">

        <div className="logo">
          <div className="logo-mark">C</div>
          <span>CareerLens</span>
        </div>

        <button
          className="nav-button"
          onClick={onBack}
        >
          ← New Analysis
        </button>

      </nav>


      {/* Results Header */}
      <section className="results-section">

        <div className="section-heading">

          <div className="badge">
            ANALYSIS COMPLETE
          </div>

          <h2>
            Your CareerLens Report
          </h2>

          <p>
            Here's how well your resume matches
            the selected job description.
          </p>

        </div>


        {/* Score + Skills */}
        <div className="results-grid">


          {/* Match Score */}
          <div className="result-card score-card">

            <span>
              Overall Match
            </span>

            <strong>
              {analysis.matchScore}%
            </strong>

            <p>

              {analysis.matchScore >= 80
                ? "Excellent match for this role."
                : analysis.matchScore >= 60
                ? "Good match, but there are some skill gaps."
                : "There are several skills you should develop."}

            </p>

          </div>


          {/* Matched Skills */}
          <div className="result-card">

            <span>
              Matched Skills
            </span>

            <h3>
              {analysis.matchedSkills.length} skills
            </h3>

            {analysis.matchedSkills.length > 0 ? (

              <p className="success-text">
                {analysis.matchedSkills.join(" · ")}
              </p>

            ) : (

              <p className="warning-text">
                No matching skills detected.
              </p>

            )}

          </div>


          {/* Missing Skills */}
          <div className="result-card">

            <span>
              Skills to Improve
            </span>

            <h3>
              {analysis.missingSkills.length} skills
            </h3>

            {analysis.missingSkills.length > 0 ? (

              <p className="warning-text">
                {analysis.missingSkills.join(" · ")}
              </p>

            ) : (

              <p className="success-text">
                No major skill gaps detected.
              </p>

            )}

          </div>

        </div>


        {/* Resume Skills */}
        <div className="recommendation-large">

          <div className="recommendation-icon large">
            ✓
          </div>

          <div>

            <h3>
              Skills detected in your resume
            </h3>

            <p>

              {analysis.resumeSkills.length > 0
                ? analysis.resumeSkills.join(" · ")
                : "No supported skills were detected."}

            </p>

          </div>

        </div>


        {/* Recommendation */}
        <div className="recommendation-large">

          <div className="recommendation-icon large">
            ✦
          </div>

          <div>

            <h3>
              Your next step
            </h3>

            <p>

              {analysis.missingSkills.length > 0
                ? `Focus on ${analysis.missingSkills.join(
                    ", "
                  )} to improve your match for this role.`
                : "Your detected skills closely match the requirements of this role."}

            </p>

          </div>

        </div>


        {/* Resume Information */}
        <div className="recommendation-large">

          <div className="recommendation-icon large">
            📄
          </div>

          <div>

            <h3>
              Resume analyzed
            </h3>

            <p>
              {data.resumeName}
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Results;