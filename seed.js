require("dotenv").config();

const mongoose = require("mongoose");
const Portfolio = require("./models/Portfolio");

const portfolioData = {
  name: "Joseph Anto",
  role: "Aspiring Data Analyst & Software Enthusiast",
  intro: "I am an aspiring Data Analyst and Software Enthusiast interested in Artificial Intelligence, Machine Learning and building useful software solutions.",
  about: [
    "Hello! I am Joseph Anto, a Bachelor of Computer Applications graduate with an interest in data analysis, software development, Artificial Intelligence and Machine Learning.",
    "My academic background has helped me build a foundation in programming and technology. I enjoy exploring how data and software can be used to solve practical problems.",
    "I completed a Machine Learning internship at SkillFied Mentor and have worked on projects including a Power Tools Rental Management System and an RFID Attendance System using Arduino. I am enthusiastic about learning new technologies and improving my technical skills."
  ],
  education: [
    {
      course: "Bachelor of Computer Applications (BCA)",
      institution: "Rajagiri College of Management and Applied Sciences",
      period: "2023 – 2026",
      result: "Current CGPA: 7.00"
    },
    {
      course: "Higher Secondary Education",
      institution: "St. Thomas H.S.S, Malayattoor",
      period: "",
      result: ""
    },
    {
      course: "School Education",
      institution: "Anita Public School, Thannipuzha",
      period: "",
      result: ""
    }
  ],
  experience: [
    {
      role: "Machine Learning Intern",
      organization: "SkillFied Mentor",
      period: "September 2025 – October 2025",
      points: [
        "Successfully completed a one-month internship focused on Machine Learning technologies.",
        "Demonstrated consistency and dedication in assigned tasks related to model training and data analysis."
      ]
    }
  ],
  skills: {
    technical: ["Python", "SQL", "JavaScript", "C", "HTML", "GitHub"],
    soft: [
      "Communication",
      "Leadership"
    ],
    additional: [
      "Fluent in three languages"
    ]
  },
  projects: [
    {
      title: "Power Tools Rental Management System",
      technology: "PHP · MySQL · HTML · JavaScript",
      description: "Developed a software solution to manage rental inventory and the booking process for power tools. Designed a user-friendly interface for customers to browse tools, check availability and place rental orders."
    },
    {
      title: "RFID Attendance System Using Arduino",
      technology: "Arduino · RFID",
      description: "Designed and implemented a system to automate attendance tracking using RFID tags and an Arduino microcontroller."
    }
  ],
  certifications: [
    {
      title: "Artificial Intelligence & Machine Learning",
      provider: "Internshala Trainings",
      year: "2025",
      description: "Completed a six-week intensive online training program covering the building blocks of AI, Machine Learning algorithms, and key frameworks and libraries."
    },
    {
      title: "Python for Data Science",
      provider: "NPTEL, IIT",
      year: "2025",
      description: "Completed a four-week course covering data analysis, visualization and Python programming concepts."
    },
    {
      title: "Cybersecurity Course",
      provider: "Tech ByHeart",
      year: "2024",
      description: "Completed a hands-on cybersecurity program covering network threats, ethical hacking basics and system protection techniques."
    }
  ],
  contact: {
    email: "josephanto7777@gmail.com",
    phone: "7025804656",
    linkedin: "https://www.linkedin.com/in/joseph-anto-b4b38431a/",
    location: "India",
    message: "Feel free to contact me for professional opportunities, collaborations or to discuss technology."
  }
};

async function insertData() {
  const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/josephAntoPortfolio";

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB Connected Successfully");

    await Portfolio.findOneAndUpdate(
      { "contact.email": portfolioData.contact.email },
      portfolioData,
      { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true }
    );

    console.log("Joseph Anto's portfolio data inserted/updated successfully.");
  } catch (error) {
    console.error("Error inserting portfolio data:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

insertData();
