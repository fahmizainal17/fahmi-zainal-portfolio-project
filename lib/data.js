// lib/data.js
export const achievements = [
    {
      id: 1,
      title: "First Place in AI Tinkerers Hackathon: LLM-as-Judge",
      date: "November 2024",
      description: "Led a team with Wan Adzhar Faiq Adzlan, Sukhdev Singh Malhi, Ammar Azman, and Muhammad Naqib Mat Asri to secure first place in the LLM-as-Judge problem statement. We developed an innovative solution using fine-tuning approaches on a relatively small model to create an LLM capable of acting as a judge. Despite limited compute resources, our solution was well-received for its creativity and practical application.",
      image: "/images/achievements/llm-as-judge-win.png",
      link: "https://github.com/wanadzhar913/aitinkerers-hackathon-supa-team-werecooked"
    },
    {
      id: 2,
      title: "Development of In-House Data Processing and Reporting Automation Tool",
      date: "February 2024",
      description: "Led the development of a comprehensive in-house tool that streamlined the entire data processing and reporting workflow for survey data. This tool integrated functionalities including IVR Data Cleaning, Questionnaire Definition, Survey Weighting, Cross-Tabulation, and Report Generation. By automating these processes, the tool reduced data preparation and reporting time from 8 hours to just 30 minutes.",
      image: "/images/achievements/survey-tools.png",
      link: "https://github.com/fahmizainal17/Streamlit_IVR_Data_Cleaning_Automation_Project"
    },
    {
      id: 3,
      title: "Model Development for Digital Marketing Analytics: Ad Scoring Model",
      date: "August 2024",
      description: "Developed a suite of predictive models analyzing consumer behaviors, market trends, and campaign performance, directly contributing to a 50% increase in overall revenue. Created advanced ETL pipelines and used state-of-the-art data storage technologies, providing unprecedented clarity into customer behavior.",
      image: "/images/achievements/roas-dashboard.png",
      link: "https://github.com/fahmizainal17/FastAPI_ROAS_Dashboard_Project"
    },
    {
      id: 4,
      title: "Flood Prediction Project Using Deep Learning",
      date: "July 2024",
      description: "Leveraged deep learning with TensorFlow Keras to develop a robust neural network model capable of analyzing historical weather data to predict flood occurrences with high precision. The model achieved an accuracy rate of up to 84%, becoming a crucial tool for disaster management agencies.",
      image: "/images/achievements/tensorflow-flood-prediction.png",
      link: "https://github.com/fahmizainal17/Tensorflow_Flood_Prediction_Project"
    },
    {
      id: 5,
      title: "Top 28% in Binary Prediction Competition on Smoker Status",
      date: "November 2023",
      description: "Secured a top 28% ranking among 1908 global teams in the Binary Prediction Competition on Smoker Status. Implemented a Weighted Ensemble method optimized with Optuna, achieving a remarkable ROC-AUC score of 0.8718 (87% accuracy).",
      image: "/images/achievements/binary-prediction.png",
      link: "https://github.com/fahmizainal17/Binary_Classification_Weighted_Ensemble_and_Optuna_Top_28"
    }
  ];
  
  export const certificationCategories = [
    {
      name: "Data Science",
      certifications: [
        {
          title: "Advanced LLM Certificate",
          date: "November 2024",
          organization: "Ever AI Technologies",
          image: "/images/certifications/advanced-llm-certificate.png"
        },
        {
          title: "Kaggle Machine Learning",
          date: "October 2024",
          organization: "Kaggle",
          image: "/images/certifications/machine-learning-certificate.jpeg"
        },
        {
          title: "Kaggle Python Programming",
          date: "November 2023",
          organization: "Kaggle",
          image: "/images/certifications/kaggle-python.jpeg"
        },
        {
          title: "IBM Data Science Essentials",
          date: "June 2023",
          organization: "Coursera",
          image: "/images/certifications/ibm-data-science-essential.png"
        }
      ]
    },
    {
      name: "Data Engineering",
      certifications: [
        {
          title: "Coursera Project Certificate - Working With Big Query",
          date: "November 2023",
          organization: "Coursera",
          image: "/images/certifications/big-query.png"
        }
      ]
    },
    {
      name: "Data Analytics",
      certifications: [
        {
          title: "General Assembly Data Analytics",
          date: "October 2023",
          organization: "General Assembly",
          image: "/images/certifications/data-analytics-bootcamp.jpeg"
        },
        {
          title: "IBM Excel Essentials for Data Analytics",
          date: "June 2023",
          organization: "Coursera",
          image: "/images/certifications/ibm-excel-essential.png"
        },
        {
          title: "Microsoft Power BI for Oil and Gas",
          date: "July 2024",
          organization: "Malaysia Board of Technologists",
          image: "/images/certifications/power-bi-volume-1.jpeg"
        }
      ]
    }
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Car Price Prediction Model",
      date: "August 2024 - September 2024",
      description: "Created a robust machine learning model for predicting car prices using features like make, model, year, and mileage. The project involved extensive data preprocessing, feature engineering, and hyperparameter tuning to achieve optimal performance.",
      image: "/images/projects/car-price-prediction.jpg",
      skills: ["Machine Learning", "Python", "Feature Engineering", "Data Preprocessing"],
      link: "https://github.com/fahmizainal17/Car_Price_Prediction_Project"
    },
    {
      id: 2,
      title: "Creating Endpoints for ROAS Dashboard",
      date: "May 2024 - August 2024",
      description: "Developed API endpoints to support a Return on Ad Spend (ROAS) Dashboard within the Databricks framework. The endpoints handle data retrieval and complex calculations necessary for digital marketing analytics, enabling marketers to access real-time insights.",
      image: "/images/projects/roas-dashboard-endpoints.png",
      skills: ["API Development", "Databricks", "Digital Marketing Analytics", "NEXT.js"],
      link: "https://github.com/fahmizainal17/FastAPI_ROAS_Dashboard_Project"
    },
    {
      id: 3,
      title: "Digital Marketing Campaign Ad Set EDA and Ad Scoring",
      date: "June 2024 - August 2024",
      description: "Analyzed and scored digital marketing ad sets through exploratory data analysis and machine learning. Developed a scoring mechanism that ranks ad sets based on their effectiveness, providing actionable insights for improving future ad strategies.",
      image: "/images/projects/ad-metrics.png",
      skills: ["Data Analysis", "Machine Learning", "Digital Marketing", "Visualization"],
      link: "https://github.com/fahmizainal17/Digital_Marketing_Campaign_Ad_Set_EDA_and_Ad_Scoring"
    },
    {
      id: 4,
      title: "Interactive Voice Response (IVR) Data Analysis Project",
      date: "November 2023 - August 2024",
      description: "Enhanced customer experience and operational efficiency by analyzing IVR data. Used Python, SQL, and Azure Databricks to clean and analyze large datasets, identifying patterns and trends to optimize call flows and reduce handling times.",
      image: "/images/projects/ivr-analytics.jpg",
      skills: ["Python", "SQL", "Azure Databricks", "Data Analysis"],
      link: "https://github.com/fahmizainal17/IVR_Data_Analysis_Project"
    },
    {
      id: 5,
      title: "Machine Learning Project: K-Means Clustering for Search Frequency",
      date: "July 2024 - August 2024",
      description: "Analyzed data from Google Ads Keyword Planner to identify cities with high search frequency for specific keywords. Developed a K-Means clustering model to group cities by search behaviors, enabling more targeted digital marketing strategies.",
      image: "/images/projects/keyword-planner.png",
      skills: ["Machine Learning", "K-Means Clustering", "Python", "Digital Marketing"],
      link: "https://github.com/fahmizainal17/Machine_Learning_K-Means_Clustering_for_Search_Frequency_Project"
    }
  ];
  
  export const experiences = [
    {
      company: "INVOKE Solutions",
      logo: "/images/companies/invoke-logo.png",
      positions: [
        {
          position: "Senior Data Scientist",
          duration: "Jul 2024 - Present",
          location: "Kuala Lumpur, Malaysia",
          type: "Full-time",
          description: [
            "Led development of data pipelines and architecture using Airflow, Talend, and AWS, enhancing data integrity and reducing processing times by 80%.",
            "Developed predictive models and dashboards that improved user satisfaction and led to a 10% revenue increase.",
            "Managed data solutions for client projects, improving data accuracy by 95% and enhancing collaboration across teams.",
            "Supervised a team of interns and junior scientists, increasing project completion rates by 30%."
          ],
          skills: ["Airflow", "Linux Architecture", "GitHub Actions", "Amazon EC2", "Data Integrity", "CI/CD", "AWS ECR"]
        },
        {
          position: "Data Scientist",
          duration: "Nov 2023 - Jul 2024",
          location: "Selangor, Malaysia",
          type: "Full-time",
          description: [
            "Spearheaded the design and implementation of Data Cleaner and Keypress Decoder tools, reducing data processing time by 80%.",
            "Developed a Unified Web Application using Streamlit and Shiny Apps, optimizing team collaboration with Python and R.",
            "Directed survey projects involving sampling, data processing, weighting, and visualization, enhancing data accuracy by 20%.",
            "Engineered data solutions that improved geographical and demographic data accuracy by 95%."
          ],
          skills: ["REST APIs", "Linux Architecture", "Microsoft Azure", "Computer Vision", "Predictive Modeling", "Streamlit", "Data Science", "Deep Learning"]
        }
      ]
    },
    {
      company: "Kaggle",
      logo: "/images/companies/kaggle-logo.png",
      positions: [
        {
          position: "Data Scientist",
          duration: "Mar 2023 - Present",
          location: "Kuala Lumpur, Malaysia",
          type: "Freelance",
          description: [
            "Participated and contributed actively in the Real World Data Machine Learning Project Competition.",
            "Spearheaded nightly and ad-hoc meetings to discuss strategies and points of view about the competition projects.",
            "Improved projects to the top 30% utilizing various techniques and models.",
            "Achieved top 28% ranking out of 1908 teams in a Binary Prediction Competition on Smoker Status Using Bio-Signals."
          ],
          skills: ["Machine Learning", "Data Analysis", "Python", "Model Optimization", "Collaborative Problem Solving"]
        }
      ]
    },
    {
      company: "Excelerate Asia",
      logo: "/images/companies/excelerate-asia-logo.png",
      positions: [
        {
          position: "Data Analyst",
          duration: "Mar 2023 - Nov 2023",
          location: "Kuala Lumpur, Malaysia",
          type: "Full-time",
          description: [
            "Analyzed HR data to uncover patterns in employee termination, optimizing recruitment and retention strategies.",
            "Led projects in Business Analytics, improving data accuracy to above 90% and developing streamlined dashboards for insights.",
            "Developed skills in SQL, Tableau, and data cleaning to enhance operational efficiency and data management."
          ],
          skills: ["Microsoft Power BI", "SQL", "Tableau", "Data Analytics", "Streamlit", "Data Visualization", "Business Intelligence"]
        }
      ]
    }
  ];
  
  export const education = [
    {
      institution: "University of Malaya",
      logo: "/images/education/university-of-malaya-logo.jpg",
      degree: "Bachelor of Science in Physics",
      duration: "2019 - 2023",
      location: "Kuala Lumpur, Malaysia",
      achievements: [
        "Graduated with Honors and Distinction (First-Class) in Physics.",
        "3 times Dean's List Academic Achievement Award recipient.",
        "ROTU Best Cadet 2023 under Second Lieutenant Reserved Army Officer."
      ]
    },
    {
      institution: "University of Malaya",
      logo: "/images/education/university-of-malaya-logo.jpg",
      degree: "Foundation in Physical Sciences",
      duration: "2018 - 2019",
      location: "Kuala Lumpur, Malaysia",
      achievements: [
        "Graduated with distinction.",
        "Participated in Olympiad in Science & Mathematics.",
        "Champion in University Tennis Championship 2018."
      ]
    }
  ];