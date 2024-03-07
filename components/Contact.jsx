import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      // Send form data to HubSpot
      await axios.post('/api/contact', formData);

      // If successful, set success state and reset form data
      setFormData({ name: '', email: '', message: '' });
      setSuccess(true);
    } catch (error) {
      // If error, set error state
      console.error('Form submission failed:', error.message);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-full flex justify-center w-full mx-auto p-[90px] items-center">
      <div className="container mx-auto p-6  rounded-lg shadow-md">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="mb-8 font-bold leading-relaxed">
            sales@bryanandbeckley.com
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1">
              Enter your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
              aria-label="Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Enter email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
              aria-label="Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Write us a message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
              aria-label="Message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-purple-900 py-2 px-4  font-bold uppercase rounded-md shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              aria-label="Submit"
            >
              Submit
            </button>
          </div>
          {error && <div className="text-red-500">{error}</div>}
          {success && (
            <div className="text-green-500">
              Your message has been sent successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
