function Home({ onStart }) {
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-mark">C</div>
          <span>CareerLens</span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>

          <a href="#how-it-works">
            How it works
          </a>

          <button
            className="nav-button"
            onClick={onStart}
          >
            Get Started
          </button>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <div className="badge">
            ✦ AI-Powered Career Intelligence
          </div>

          <h1>
            Know exactly how well your resume
            <span>matches your dream job.</span>
          </h1>

          <p className="hero-description">
            CareerLens analyzes your resume against a job
            description, identifies skill gaps, and gives
            you personalized recommendations to improve
            your chances of getting shortlisted.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={onStart}
            >
              Analyze My Resume →
            </button>

            <a
              href="#how-it-works"
              className="secondary-button"
            >
              See how it works
            </a>

          </div>

          <div className="trust-row">

            <div>
              <strong>AI-powered</strong>
              <span>Resume Analysis</span>
            </div>

            <div>
              <strong>Skill Gap</strong>
              <span>Detection</span>
            </div>

            <div>
              <strong>Personalized</strong>
              <span>Recommendations</span>
            </div>

          </div>

        </div>


        {/* Preview Card */}
        <div className="hero-card">

          <div className="card-header">

            <div>
              <span className="small-label">
                RESUME MATCH
              </span>

              <h3>
                Software Engineer
              </h3>
            </div>

            <div className="score-circle">
              <strong>82%</strong>
              <span>Match</span>
            </div>

          </div>


          <div className="skill-section">

            <div className="skill-title">
              <span>Technical Skills</span>
              <strong>8 / 10</strong>
            </div>

            <div className="skill-bar">
              <div className="skill-progress"></div>
            </div>

          </div>


          <div className="skills">

            <span className="skill good">
              ✓ Java
            </span>

            <span className="skill good">
              ✓ SQL
            </span>

            <span className="skill good">
              ✓ React
            </span>

            <span className="skill good">
              ✓ REST APIs
            </span>

            <span className="skill missing">
              + AWS
            </span>

            <span className="skill missing">
              + Docker
            </span>

          </div>


          <div className="recommendation">

            <span className="recommendation-icon">
              ✦
            </span>

            <div>

              <strong>
                AI Recommendation
              </strong>

              <p>
                Add cloud deployment experience
                to improve your match score.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Features */}
      <section
        className="features-section"
        id="features"
      >

        <div className="section-heading">

          <div className="badge">
            WHY CAREERLENS?
          </div>

          <h2>
            More than a resume checker.
          </h2>

          <p>
            Turn your resume into a roadmap
            for your next opportunity.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              ◎
            </div>

            <h3>
              Resume Intelligence
            </h3>

            <p>
              Understand the skills and experience
              already present in your resume.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ⌁
            </div>

            <h3>
              Skill Gap Detection
            </h3>

            <p>
              Discover exactly which skills are
              missing for the role you want.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ✦
            </div>

            <h3>
              AI Recommendations
            </h3>

            <p>
              Get personalized suggestions to
              improve your resume and preparation.
            </p>

          </div>

        </div>

      </section>


      {/* How It Works */}
      <section
        className="how-section"
        id="how-it-works"
      >

        <div className="section-heading">

          <div className="badge">
            HOW IT WORKS
          </div>

          <h2>
            From resume to roadmap.
          </h2>

        </div>


        <div className="steps">

          <div className="step">

            <span>01</span>

            <h3>
              Upload
            </h3>

            <p>
              Upload your current PDF resume.
            </p>

          </div>


          <div className="step">

            <span>02</span>

            <h3>
              Compare
            </h3>

            <p>
              Provide the job description
              you're targeting.
            </p>

          </div>


          <div className="step">

            <span>03</span>

            <h3>
              Analyze
            </h3>

            <p>
              CareerLens evaluates your
              skills and experience.
            </p>

          </div>


          <div className="step">

            <span>04</span>

            <h3>
              Improve
            </h3>

            <p>
              Follow personalized
              recommendations.
            </p>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer>

        <div className="logo">

          <div className="logo-mark">
            C
          </div>

          <span>
            CareerLens
          </span>

        </div>

        <p>
          Built to help students become better candidates.
        </p>

      </footer>

    </div>
  );
}

export default Home;