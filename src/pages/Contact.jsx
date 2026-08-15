import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Your message has been sent successfully");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container text-center">
          <p className="contact-subtitle">CONTACT US</p>
          <h1>Get In Touch</h1>
          <p>
            We'd love to hear from you. <br />
            Send us a message and we'll get back to you.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <p className="contact-subtitle"> CONTACT INFORMATION</p>
              <h2> Let's Talk </h2>
              <p className="text-muted">
                Have a question about our furniture,
                your order or anything else? <br />
                We're here to help.
              </p>

              <div className="contact-info">
                <div className="contact-item">
                  <i className="bi bi-geo-alt"></i>
                  <div>
                    <h5>Address</h5>
                    <p>Cairo, Egypt</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="bi bi-envelope"></i>
                  <div>
                    <h5> Email</h5>
                    <p> info@Furniture Store.com </p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="bi bi-telephone"></i>
                  <div>
                    <h5>Phone</h5>
                    <p> +20 123 456 7890</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="bi bi-clock"></i>
                  <div>
                    <h5> Working Hours </h5>
                    <p> Sat - Thu: 9:00 AM - 6:00 PM </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-form">
                <h3>Send Us a Message </h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="What can we help you with?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label"> Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="6"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn shop-btn"
                  >
                    <i className="bi bi-send me-2"></i>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;