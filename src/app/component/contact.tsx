import "@/app/styles/contact.css";

export default function Contact() {
  return (
    <div id="Contact">
      <section className="contact-section">
        <div className="container">
          <div className="contact-map">
            <iframe
              width="100%"
              height="100%"
              className="map-frame"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1414468338335!2d67.07618952379707!3d24.893156420770936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eda96d7f28b%3A0x6d589210650a9a08!2sQasim%20Umer%20Rd%20Flyover%2C%20National%20Stadium%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731283124360!5m2!1sen!2s"
              style={{ filter: "contrast(1.2) opacity(0.4)" }}
            />
            <div className="contact-info">
              <div className="address">
                <h2 className="contact-title">ADDRESS</h2>
                <p>Karachi, Sindh, Pakistan</p>
              </div>
              <div className="contact-details">
                <h2 className="contact-title">EMAIL</h2>
                <a href="mailto:info@hassanjhr.com" className="email-link">
                  info@hassanjhr.com
                </a>
                <h2 className="contact-title">PHONE</h2>
                <p>0300-1234567</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h2 className="form-title">CONTACT</h2>
            <p className="form-description">
              Need assistance? We are always here to lend a hand.
            </p>
            <form>
              <div className="input-group">
                <label htmlFor="name" className="input-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label htmlFor="message" className="input-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea-field"
                  defaultValue={""}
                />
              </div>
              <button className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
