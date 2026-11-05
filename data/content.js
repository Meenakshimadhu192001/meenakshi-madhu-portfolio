// Edit this file to customize the portfolio. All content is sourced from the resume and LinkedIn PDFs.

export const profile = {
  name: "Meenakshi Madhu",
  title: "AI/ML Engineer",
  tagline: "NLP · Deep Learning · Generative AI (RAG, LLM)",
  headline:
    "I build NLP, deep learning and recommendation systems in Python, from preprocessing and evaluation to Streamlit and FastAPI deployment.",
  location: "Pathanamthitta, Kerala, India",
  email: "meenakshimadhu2024@gmail.com",
  linkedin: "https://www.linkedin.com/in/meenakshimadhu-967073289",
  github: "https://github.com/Meenakshimadhu192001",
  about: [
    "I am a Certified Specialist in AI/ML (ICT Academy of Kerala) with hands-on experience building NLP, deep learning and recommendation systems in Python. My work includes a fake news and misinformation detection system with evidence retrieval, and a CNN-based solar panel classifier that reached 98% accuracy.",
    "Before moving into AI/ML, I spent a year as a Data Analyst at Tata Electronics, where I tracked process capability (CPK), ran root cause analysis and reported to management. That background shapes how I approach model evaluation: measure carefully, find the cause, report clearly.",
    "I am looking for AI/ML Engineer, Machine Learning Engineer or GenAI Engineer roles.",
  ],
  facts: [
    ["Focus", "NLP, deep learning, GenAI"],
    ["Certified", "AI/ML Specialist, ICT Academy of Kerala"],
    ["Stack", "Python, scikit-learn, TensorFlow, PyTorch"],
  ],
};

export const projects = [
  {
    name: "Fake News & Misinformation Detection",
    problem: "Classify news articles as real or fake and give readers evidence to judge the prediction.",
    solution:
      "A TF-IDF and Logistic Regression pipeline with related-article retrieval, per-document explanations and a publisher credibility score based on historical real-news share. Served through a FastAPI backend and a React/TypeScript interface, with batch CSV prediction and analytics on class, topic and linguistic distributions.",
    tech: ["Python", "scikit-learn", "TF-IDF", "Logistic Regression", "FastAPI", "React"],
    contribution: "Built the classifier, retrieval, credibility scoring, analytics and the app.",
    outcome: "98.8% accuracy and 0.999 ROC-AUC on a 20,000-row held-out split.",
    link: "https://github.com/jyothish2k99/Fake_News_Misinformation_Detection",
  },
  {
    name: "TripLens: Travel Package Recommendation",
    problem: "Help users compare travel packages against their preferences, budget, destination and duration.",
    solution:
      "A system that ranks travel packages and provides value-for-money analysis, itinerary efficiency features and explainable recommendations.",
    tech: ["Python", "JavaScript"],
    contribution: "Developed the ranking system and the recommendation features.",
    outcome: "Explainable, preference-based package rankings.",
    link: "https://github.com/Meenakshimadhu192001/TripLens",
  },
  {
    name: "EV Population Prediction",
    problem: "Analyze Electric Vehicle adoption trends and predict how the EV population changes.",
    solution:
      "An end-to-end ML pipeline covering data preprocessing, EDA, feature engineering and predictive modeling.",
    tech: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn"],
    contribution: "Group project in the AI/ML program: contributed to the end-to-end pipeline.",
    outcome: "A complete pipeline from raw data to predictive model.",
    link: "https://github.com/MidhulaMS/EV-Population-Prediction",
  },
];

export const experience = [
  {
    role: "AI/ML Intern",
    org: "TrackGenesis",
    period: "Oct 2026 – Nov 2026",
    points: [
      "Developed a fake news and misinformation detection system using ML and NLP to classify news articles.",
      "Built a Python text preprocessing pipeline using NLTK and spaCy.",
      "Implemented TF-IDF with Logistic Regression as the baseline classifier.",
      "Designed a source credibility score based on historical real/fake news distributions.",
      "Developed evidence retrieval using semantic similarity and FAISS to find related articles.",
      "Built a Streamlit interface showing predictions, confidence scores and supporting evidence.",
      "Analyzed linguistic patterns and misinformation trends through data visualization.",
    ],
  },
  {
    role: "Data Analyst",
    org: "Tata Electronics Products and Solutions Pvt. Ltd.",
    period: "Jun 2024 – Jul 2025",
    points: [
      "Maintained daily and weekly machine performance metrics with 100% accuracy.",
      "Tracked CPK for machine qualification to customer requirements using Minitab.",
      "Prepared qualification reports and secured customer approvals.",
      "Ran FACA analysis to identify root causes and define preventive actions.",
      "Logged machine downtime, produced management reports and built dashboards presented in review meetings.",
    ],
  },
];

export const skills = [
  ["Machine Learning", ["Supervised & Unsupervised Learning", "EDA", "Feature Engineering", "Model Evaluation", "Hyperparameter Tuning", "Regression", "Classification", "Clustering"]],
  ["NLP & Generative AI", ["NLTK", "spaCy", "TF-IDF", "Embeddings", "Transformers (BERT, T5, GPT)", "LLM Applications", "RAG", "FAISS", "Prompt Engineering", "AI Agents"]],
  ["Deep Learning & CV", ["TensorFlow", "PyTorch", "CNN", "OpenCV"]],
  ["Programming & Data", ["Python", "NumPy", "Pandas", "Scikit-learn", "SQL", "Excel", "Power BI"]],
  ["Deployment & Tools", ["Streamlit", "FastAPI", "Git/GitHub", "AWS", "GCP", "Hugging Face", "MLOps", "Agile/Jira"]],
  ["Analysis & Reporting", ["Process Capability (CPK)", "Root Cause Analysis (FACA)", "Minitab", "Dashboards", "Management Reporting"]],
];

export const education = [
  {
    title: "B.Tech, Electronics & Communication Engineering",
    org: "College of Engineering Pathanapuram, APJ Abdul Kalam Technological University",
    period: "2020 – 2024",
    note: "CGPA 6.87",
  },
];

export const certs = [
  {
    title: "Certified Specialist in AI/ML",
    org: "ICT Academy of Kerala",
    period: "May 2026 – Sep 2026",
    note: "Core ML, deep learning, CV and NLP, GenAI and production AI (LLM applications, RAG, FAISS, AI agents, MLOps, XAI, Responsible AI).",
  },
  {
    title: "Embedded System Designing (3-day internship)",
    org: "Soften Technologies, Kochi",
    period: "",
    note: "Foundational exposure to circuit design and electronic components.",
  },
];
