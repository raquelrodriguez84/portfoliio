import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hakomzv', 'template_hob8mzm', form.current, 'JhcM0qLZo35q-RpAn')
      .then((result) => {
          console.log(result.text);
          setMessageSent(true);
          setError('');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setError('Error sending message, please try again.');
      });
  };

  return (
    <section className="contact">
      <h2>Puedes contactarme directamente por email o teléfono.</h2>
      <p>También puedes visitar mis perfiles en GitHub y LinkedIn:</p>

      <div className="contact__info">
        <p><strong>Email:</strong> rakela290@gmail.com</p>
        <p><strong>Teléfono:</strong> 617116686</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/raquelrodriguez84" target="_blank" rel="noreferrer">github.com/raquelrodriguez84</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/raquel-rodriguez-5ab872293" target="_blank" rel="noreferrer">linkedin.com/in/raquel-rodriguez-5ab872293</a></p>
      </div>

      <form ref={form} className="contact__form" onSubmit={sendEmail}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="user_name" id="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="user_email" id="email" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="5" required></textarea>

        <button type="submit">Send</button>
      </form>

      {messageSent && <p className="success-message">Message sent successfully!</p>}
      {error && <p className="error-message">{error}</p>}
    </section>
  );
};

export default Contact;
