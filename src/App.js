// App.js
import React, { useEffect } from 'react';
import './App.css';
import ThreeBackground from './ThreeBackground'; // Adjust the path as per your project structure

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;

      const scrollPercentage = (scrolled / scrollable) * 100;
      const bgScroll = scrollPercentage * 0.1; // Adjust scroll speed as needed

      const bgElement = document.querySelector('.three-background');
      if (bgElement) {
        bgElement.style.transform = `translateY(-${bgScroll}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <ThreeBackground />

      <div className="content">
        <header>
          <h1>Emamul Khan</h1>
        </header>

        <section className="personal-info">
          <h2>Personal Information</h2>
          <p>
            <strong>Name:</strong> Emamul Khan<br />
            <strong>Address:</strong> Flat No.504 Block A, Baddam Narayana, Attapur, Hyderabad, India<br />
            <strong>Phone:</strong> +91 8738878326<br />
            <strong>Email:</strong> emamulkhanmgs@gmail.com<br />
            <strong>LinkedIn:</strong> <a href="https://linkedin.com/emamul-khan" target="_blank" rel="noopener noreferrer">linkedin.com/emamul-khan</a><br />
            <strong>GitHub:</strong> <a href="https://github.com/emam07" target="_blank" rel="noopener noreferrer">github.com/emam07</a>
          </p>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <p>
            <strong>IT Constructs:</strong> Data Structures, Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems<br />
            <strong>Development Tools:</strong> Visual Studio, PyCharm, Jupyter Notebook, Postman<br />
            <strong>Languages:</strong> C, C++, JavaScript, HTML, CSS, SQL, React.js, Node.js, Solidity
          </p>
        </section>

        <section className="interests">
          <h2>Interests</h2>
          <ul>
            <li>Reading</li>
            <li>Travelling</li>
            <li>PC games</li>
          </ul>
        </section>

        <section className="projects">
          <h2>Projects</h2>

          <div className="project">
            <div className="project-header">
              <h3>2020–2021: Shelter Inn</h3>
              <a href="https://shelterinn.netlify.app" className="project-link" target="_blank" rel="noopener noreferrer">Visit Project</a>
            </div>
            <p>
              <strong>Role:</strong> Lead<br />
              Shelter is a pet adoption website which allows users to adopt pets across different areas in the country. It utilizes HTML, CSS, and basic JavaScript.
            </p>
          </div>

          <div className="project">
            <div className="project-header">
              <h3>2021–2022: CALORIE METER</h3>
              <a href="workprogreess.netlify.app" className="project-link" target="_blank" rel="noopener noreferrer">Visit Project</a>
            </div>
            <p>
              <strong>Role:</strong> Lead<br />
              Calorie Meter is an app to record and estimate the number of calories consumed daily. Developed using Python and Android Studio, incorporating CNN for image recognition.
            </p>
          </div>

          <div className="project">
            <div className="project-header">
              <h3>2022–2023: REAL TIME FACIAL ANIMATION</h3>
              <a href="workprogreess.netlify.app" className="project-link" target="_blank" rel="noopener noreferrer">Visit Project</a>
            </div>
            <p>
              <strong>Role:</strong> Lead<br />
              Developed a deep learning-based method for real-time facial animation using GANs and facial landmark detectors.
            </p>
          </div>

          <div className="project">
            <div className="project-header">
              <h3>2021–2022: CAT-vs-DOGS</h3>
              <a href="workprogreess.netlify.app" className="project-link" target="_blank" rel="noopener noreferrer">Visit Project</a>
            </div>
            <p>
              <strong>Role:</strong> Lead<br />
              <strong>Projects:</strong><br />
              1. CAT-vs-DOGS: Machine learning project to classify cats and dogs using TensorFlow, CNN, and Keras.<br />
              2. SMART-PORTFOLIO: Portfolio implemented in Solidity on the Remix IDE, focusing on smart contracts.
            </p>
          </div>
          <div className="project">
            <div className="project-header">
              <h3>2022–2022: ThreejsBall </h3>
              <a href="https://threejsball.netlify.app" className="project-link" target="_blank" rel="noopener noreferrer">Visit Project</a>
            </div>
            <p>
              <strong>Role:</strong> Lead<br />
              <strong>Projects:</strong><br />
              1.This is a small threejs project which i made for learning threejs.<br />
            </p>
          </div>
        </section>

        <section className="education">
          <h2>Education</h2>
          <ul>
            <li>10th: CGPA 8.6</li>
            <li>12th: Percentage 74.6%</li>
            <li>B.Tech: SGPA 7.2</li>
          </ul>
        </section>

        <section className="achievements">
          <h2>Achievements</h2>
          <ul>
            <li>Participated in Smart India Hackathon</li>
            <li>Participated in AKTU Zonal (Football - 2nd place, Volleyball)</li>
            <li>Web Lead at THE BINARY CLUB (college society)</li>
          </ul>
        </section>

        <footer>
          <p className='footer'>&copy; 2024 Emamul Khan. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
