import React, { useRef } from 'react';
import { send, sendForm } from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm('service_portfolio', 'template_1', form.current, 'unique-id-code')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-group container mt-0 mb-3">
        <label for="exampleFormControlInput1">Name</label>
        <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="name" />
      </div>
      <div className="form-group container mt-3 mb-3">
        <label for="exampleFormControlInput2">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
      </div>
      <div className="form-group container mt-3 mb-3">
        <label for="exampleFormControlTextarea1">Message</label>
        <textarea className="form-control" id="messageArea1" rows="3"></textarea>
      </div>
      <div className="container mt-3 mb-3">
      <input className='btn btn-primary' type="submit" value="Send" />
      </div>
    </form>
  );
};

export const ContactUsFooter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm('service_portfolio', 'template_1', form.current, 'bJymsM6AW3Av6bIVr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="content">
    <form ref={form} onSubmit={sendEmail}>
      <div className="horizontal">
          <label  hidden="hidden">Name</label>
          <input className="form-control-footer" type="text" name="user_name" placeholder="name"/>
          <label hidden="hidden">Email</label>
          <input className="form-control-footer" type="email" name="user_email" placeholder="email" />
      </div>
      <div className="horizontal">
        <label hidden="hidden">Message</label>
        <textarea className="form-control-footer" name="message" placeholder="message" />
      </div>
      <input className='button center' type="submit" value="Send" />
    </form>
    </div>
  );
};
