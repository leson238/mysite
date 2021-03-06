/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

const Contact = ({ data, handleSubmit }) => {
  const { name, phone } = data;
  const {
    street, city, state, zip,
  } = data.address;
  const message = data.contactmessage;

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>
        <div className="ten columns">
          <p className="lead">{message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form method="POST" id="contact-form" name="contact-form" onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name
                  {' '}
                  <span className="required">*</span>
                </label>
                <input type="text" defaultValue="" size="35" id="name" name="contactName" />
              </div>
              <div>
                <label htmlFor="contactEmail">
                  Email
                  {' '}
                  <span className="required">*</span>
                </label>
                <input type="text" defaultValue="" size="35" id="email" name="contactEmail" />
              </div>
              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input type="text" defaultValue="" size="35" id="subject" name="contactSubject" />
              </div>
              <div>
                <label htmlFor="contactMessage">
                  Message
                  {' '}
                  <span className="required">*</span>
                </label>
                <textarea cols="50" rows="15" id="message" name="contactMessage" />
              </div>
              <div>
                <button className="submit" type="submit">
                  Send
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>
          <div id="message-warning"> Error </div>
          <div id="message-success">
            <i className="fa fa-check" />
            Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {name}
              <br />
              {street}
              {' '}
              <br />
              {city}
,
              {state}
              {' '}
              {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
