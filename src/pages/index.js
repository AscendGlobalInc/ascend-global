import React from "react";
import { Helmet } from "react-helmet";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const App = () => {
  return (
    <div className="app">
      <Helmet>
        <title>Ascend Global Inc.</title>
      </Helmet>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <h1>Welcome to Ascend Global Inc.</h1>
          <p>We manufacture and distribute high-quality patient handling equipment and hospital furniture.</p>
          <button>Learn More</button>
        </section>
        <section id="about">
          <h2>About Us</h2>
          <p>Ascend Global Inc. was conceived and established in 2017 to revolutionize the manufacture and distribution of pre-hospital emergency care solutions, patient handling equipment, and hospital furniture. Our spectrum of products offers a perfect solution for every clinical setting. And if not, we bend backward to customize a perfect solution tailored to your need.</p>
          <p>Pivoting around the safety of the users, we are bent on delivering hallmark products and solutions.</p>
          <h3>Our Vision</h3>
          <p>Pivoting around the safety of the users, we are bent on delivering hallmark products and solutions.</p>
          <h3>Our Mission</h3>
          <p>To assist patient movement, both ergonomically and economically.</p>
          <h3>Our Values</h3>
          <ul>
            <li>To manufacture quality products whilst ensuring our operations have the least to no detrimental effect upon the environment.</li>
            <li>We are committed to being responsible corporate citizens in the community we operate in.</li>
          </ul>
          <button>Learn More</button>
        </section>
        <section id="products">
          <h2>Our Products</h2>
          <p>Redefining new standards of quality is a part of our company’s culture. It is imbued into the everyday process. Which is why our team proudly stands behind every one of our creations.</p>
          <button>Learn More</button>
        </section>
        <section id="team">
          <h2>Our Team</h2>
          <p>We are a tightly-knit, talented group of people with a shared vision and passion for delivering consistently great solutions for our clients. We strive to make sure our people are supported and empowered to deliver exceptional results for our clients, while ensuring the company is a fun, inclusive, challenging place to work and develop a rewarding career.</p>
          <button>Learn More</button>
        </section>
        <section id="customers">
          <h2>Our Customers</h2>
          <p>Every client has a unique need when it comes to patient care equipment or hospital furniture. Understanding their needs and within the given parameters, we present crisp custom solutions.</p>
          <p>We will always conduct ourselves with integrity, humility, and fairness, treating you just as we want to be treated ourselves.</p>
          <button>Learn More</button>
        </section>
        <section id="contact">
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send</button>
          </form>
          <div className="contact-info">
            <p><FaMapMarkerAlt /> 123 Main St. Suite 100, Anytown, USA 12345</p>
            <p><FaPhoneAlt /> 1-800-555-1234</p>
            <p><FaEnvelope /> info@ascendglobal.com</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Ascend Global Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;