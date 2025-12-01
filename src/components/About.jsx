import "./About.css";
import about1Img from "../assets/images/about_1.png";
import about2Img from "../assets/images/about_2.png";
import about3Img from "../assets/images/about_3.png";
import about4Img from "../assets/images/about_4.png";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-heading">
        <span className="about-label">How It Works</span>
        <h2 className="about-title">Your Journey with MentAura</h2>
        <p className="about-subtitle">
          A simple and engaging way to learn, teach, and grow together
        </p>
      </div>

      <div className="about-cards">
        {/* Card 1 */}
        <div className="about-card about-card-left">
          <div className="about-card-image-wrapper">
            <img
              src={about1Img}
              alt="Discover Mentors"
              className="about-card-image"
            />
            <div className="about-card-number">01</div>
          </div>
          <div className="about-card-content">
            <h3 className="about-card-title">Discover Mentors</h3>
            <p className="about-card-text">
              Browse skilled professionals across various domains and select the
              right mentor who matches your learning goals and aspirations.
            </p>
            <div className="about-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="about-card about-card-right">
          <div className="about-card-content">
            <h3 className="about-card-title">Schedule Sessions</h3>
            <p className="about-card-text">
              Easily book personalized sessions based on mentor availability and your
              convenience. Flexible scheduling that fits your lifestyle.
            </p>
            <div className="about-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className="about-card-image-wrapper">
            <img
              src={about2Img}
              alt="Schedule Sessions"
              className="about-card-image"
            />
            <div className="about-card-number">02</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="about-card about-card-left">
          <div className="about-card-image-wrapper">
            <img
              src={about3Img}
              alt="Connect and Communicate"
              className="about-card-image"
            />
            <div className="about-card-number">03</div>
          </div>
          <div className="about-card-content">
            <h3 className="about-card-title">Connect & Communicate</h3>
            <p className="about-card-text">
              Use built-in chat or meeting tools to discuss topics, clarify doubts,
              and collaborate in real-time with your mentor or students.
            </p>
            <div className="about-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="about-card about-card-right">
          <div className="about-card-content">
            <h3 className="about-card-title">Grow Together</h3>
            <p className="about-card-text">
              MentAura enables continuous skill development and knowledge sharing in a
              supportive learning community where everyone thrives together.
            </p>
            <div className="about-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="about-card-image-wrapper">
            <img
              src={about4Img}
              alt="Grow Together"
              className="about-card-image"
            />
            <div className="about-card-number">04</div>
          </div>
        </div>
      </div>
    </section>
  );
}