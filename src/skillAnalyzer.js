const SKILLS = [
  "Java",
  "Python",
  "C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "HTML",
  "CSS",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "SQL",
  "PostgreSQL",
  "Firebase",
  "REST API",
  "REST APIs",
  "Git",
  "GitHub",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "GCP",
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence",
  "RAG",
  "LangChain",
  "DSA",
  "Data Structures",
  "Algorithms",
  "OOP",
  "Object Oriented Programming",
  "DBMS",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
];

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s+#.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findSkills(text) {
  const normalizedText = normalizeText(text);

  const foundSkills = [];

  for (const skill of SKILLS) {
    const normalizedSkill = normalizeText(skill);

    if (normalizedText.includes(normalizedSkill)) {
      if (!foundSkills.includes(skill)) {
        foundSkills.push(skill);
      }
    }
  }

  return foundSkills;
}

export function analyzeResume(resumeText, jobDescription) {
  console.log("========== CAREERLENS ANALYSIS ==========");
  console.log("Resume text length:", resumeText.length);
  console.log("Job description length:", jobDescription.length);

  const resumeSkills = findSkills(resumeText);
  const requiredSkills = findSkills(jobDescription);

  console.log("Resume skills:", resumeSkills);
  console.log("Required skills:", requiredSkills);

  const matchedSkills = requiredSkills.filter((skill) =>
    resumeSkills.includes(skill)
  );

  const missingSkills = requiredSkills.filter(
    (skill) => !resumeSkills.includes(skill)
  );

  let matchScore = 0;

  if (requiredSkills.length > 0) {
    matchScore = Math.round(
      (matchedSkills.length / requiredSkills.length) * 100
    );
  }

  console.log("Matched skills:", matchedSkills);
  console.log("Missing skills:", missingSkills);
  console.log("Match score:", matchScore);
  console.log("=========================================");

  return {
    matchScore,
    resumeSkills,
    requiredSkills,
    matchedSkills,
    missingSkills,
  };
}