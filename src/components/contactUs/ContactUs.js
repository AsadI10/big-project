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
<>
<form onSubmit={handleSubmit}>
  <label htmlFor="name">Name:</label>
  <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
/>

<label htmlFor="email">Email:</label>
<input
  type="email"
  id="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
/>

<label htmlFor="message">Message:</label>
<textarea
  id="message"
  name="message"
  value={formData.message}
  onChange={handleChange}
/>

<button type="submit">Send Message</button>
</form>
{submitMessage && <div className="submit-message">{submitMessage}</div>}
  </>
</div>
  );
};

export default ContactUs;