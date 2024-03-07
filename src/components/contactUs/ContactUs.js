import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

const [submitMessage, setSubmitMessage] = useState('');

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
};
const handleSubmit = (e) => {
  e.preventDefault();
  // Check if all fields are filled
  if (!formData.name || !formData.email || !formData.message) {
    setSubmitMessage('Please fill in all fields.');
    return;
}

console.log(formData);

// clear the form
setFormData({ name: '', email: '', message: '' });

// Set a success message
  setSubmitMessage('Thank you! Your message has been sent.');
};

return (
  <div className="contact-form">
    <div className="contact-header">
      <h1>Get in touch...</h1>
      <p>To send us feedback or discuss your park visit, please complete and submit the form below.</p>
      <p>We aim to respond within 10 working days.</p>
    </div>
<>
<form onSubmit={handleSubmit}>
  <label htmlFor="name">Name:</label>
  <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
/>

<label htmlFor="email">Email:</label>
<input
  type="email"
  id="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  required
/>

<label htmlFor="subject">Subject of Enquiry *</label>
<select
  id="subject"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  required
>
  <option value="">Please select</option>
  <option value="General Inquiry">General Inquiry</option>
  <option value="Support">Support</option>
  <option value="Sales">Sales</option>
  </select>

<label htmlFor="message">Message:</label>
<textarea
  id="message"
  name="message"
  value={formData.message}
  onChange={handleChange}
  required 
/>

<button type="submit">Send Message</button>
</form>
{submitMessage && <div className="submit-message">{submitMessage}</div>}
  </>
</div>
  );
};

export default ContactUs;