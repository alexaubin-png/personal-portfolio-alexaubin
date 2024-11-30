import React from 'react';
import { Link } from 'react-router-dom';
import './Websites.css';

export default function Websites() {
  return (
    <section className="websites-container">
      <h1 className="page-title">My Past Websites</h1>
      <div className="websites-grid">
        {/* Website 1 */}
        <div className="website-item">
          <iframe
            src="https://capstone-indygo-react-capstone-magic-q6li.onrender.com"  // Replace with actual URL of the project
            title="Website 1"
            className="website-iframe"
          ></iframe>
          <div className="website-description">
            <h3>Indygo BusStops</h3>
            <p>
              This project is about Cleaning and bettering the community in indianaappolis. It features Maps of marion county, over 2,400 bus stops,
              and was built using ReactJS and Map API's.
            </p>
            <Link to="/website-1-details" className="more-info-link">
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Website 2 */}
        <div className="website-item">
          <iframe
            src="https://example2.com"  // Replace with actual URL of the project
            title="Website 2"
            className="website-iframe"
          ></iframe>
          <div className="website-description">
            <h3>Project Title 2</h3>
            <p>
              This project is about [description]. It features [features],
              and was built using [technologies].
            </p>
            <Link to="/website-2-details" className="more-info-link">
              Learn More
            </Link>
          </div>
        </div>

        {/* Additional websites can follow the same pattern */}
      </div>
    </section>
  );
}
