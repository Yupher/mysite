import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const reset = () => setState({ ...state, name: "", email: "", message: "" });
  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = state;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID,
      );
      reset();
    } catch (e) {
      console.log(e);
    }
  };
  const onChange = (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className='contact-me'>
      <h1 className='contact-me-title'>Contact me</h1>
      <form onSubmit={onSubmit}>
        <div className='contact-me-container'>
          <input
            className='contact-me-input'
            name='name'
            value={state.name}
            onChange={onChange}
            type='text'
            placeholder='Your name'
          />
          <input
            className='contact-me-input'
            name='email'
            value={state.email}
            onChange={onChange}
            type='email'
            placeholder='Your email'
          />
          <textarea
            className='contact-me-input'
            name='message'
            value={state.message}
            onChange={onChange}
            type='text'
            placeholder='Your message'
          />
          <input className='contact-me-submit' type='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
