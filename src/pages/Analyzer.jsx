import { useState } from "react";
import { extractTextFromPDF } from "../pdfReader";

function Analyzer({ onAnalysis }) {
  const [resume, setResume] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isReading, setIsReading] = useState(false);
  const [error, setError] = useState("");

  const handleResumeUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setError("");
    setResume(file);
    setResumeText("");

    if (file.type !== "application/pdf") {
      setError("Please upload a PDF resume.");
      setResume(null);
      return;
    }

    try {
      setIsReading(true);

      const text = await extractTextFromPDF(file);

      setResumeText(text);
    } catch (error) {
      console.error(error);

      setError(
        "Could not read this PDF. Please try another PDF resume."
      );

      setResumeText("");
    } finally {
      setIsReading(false);
    }
  };

  const handleAnalyze = () => {
    if (!resume) {
      setError("Please upload your resume first.");
      return;
    }

    if (!resumeText.trim()) {
      setError("Resume text could not be extracted.");
      return;
    }

    if (!jobDescription.trim()) {
      setError("Please paste the job description first.");
      return;
    }

    setError("");

    onAnalysis({
      resumeText,
      jobDescription,
      resumeName: resume.name,
    });
  };

  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">

        <div className="logo">
          <div className="logo-mark">C</div>
          <span>CareerLens</span>
        </div>

      </nav>


      {/* Analyzer Header */}
      <section className="analyzer-section">

        <div className="section-heading">

          <div className="badge">
            CAREER ANALYZER
          </div>

          <h2>
            Analyze your career fit
          </h2>

          <p>
            Upload your resume and paste the job
            description to discover your strengths
            and skill gaps.
          </p>

        </div>


        <div className="analyzer-grid">


          {/* Resume Upload */}

          <div className="input-card">

            <div className="input-card-header">

              <div className="number">
                01
              </div>

              <div>

                <h3>
                  Upload Resume
                </h3>

                <p>
                  PDF format supported
                </p>

              </div>

            </div>


            <label className="upload-area">

              <input
                type="file"
                accept=".pdf,application/pdf"
                onChange={handleResumeUpload}
              />

              <div className="upload-icon">
                ↑
              </div>


              {isReading ? (

                <>
                  <strong>
                    Reading your resume...
                  </strong>

                  <span>
                    Please wait
                  </span>
                </>

              ) : resume ? (

                <>
                  <strong>
                    {resume.name}
                  </strong>

                  <span>
                    {resumeText
                      ? "Resume text extracted successfully"
                      : "Resume selected"}
                  </span>
                </>

              ) : (

                <>
                  <strong>
                    Drop your resume here
                  </strong>

                  <span>
                    or click to browse your PDF
                  </span>
                </>

              )}

            </label>


            {resumeText && (

              <div className="resume-status">
                ✓ Resume text extracted successfully
              </div>

            )}

          </div>


          {/* Job Description */}

          <div className="input-card">

            <div className="input-card-header">

              <div className="number">
                02
              </div>

              <div>

                <h3>
                  Job Description
                </h3>

                <p>
                  Paste the role you're targeting
                </p>

              </div>

            </div>


            <textarea
              className="job-input"
              placeholder="Paste the complete job description here..."
              value={jobDescription}
              onChange={(event) => {
                setJobDescription(event.target.value);
                setError("");
              }}
            />

          </div>

        </div>


        {/* Error */}

        {error && (

          <div className="error-message">
            {error}
          </div>

        )}


        {/* Analyze */}

        <button
          className="analyze-button"
          onClick={handleAnalyze}
          disabled={isReading}
        >
          {isReading
            ? "Reading Resume..."
            : "✦ Analyze Resume"}
        </button>

      </section>

    </div>
  );
}

export default Analyzer;