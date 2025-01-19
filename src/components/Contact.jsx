import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../index.css';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {

    e.preventDefault();

    /**
     * email.js.send method send email
     * @param service_id
     * @param template_id
     * @param json_object
     * @param user_id
     */
    emailjs.send("service_x4zcr0l","template_vbjwqkd",{
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        },"ErUmyO_N8_DhPAWQ5")

    .then((result) => {
      alert('Message sent successfully!');

    })
    .catch((error) => {
      console.error('Error sending message: ', error);
        alert('failed')
    });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <h2 >Contact Me</h2>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" id="submit-btn" className='btn'>Send</button>
      </form>
    </section>
  );
};

export default Contact;