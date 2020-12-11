import {React} from "react";
import emailjs from 'emailjs-com';
//import "./Support.css"

export default function Support(props) {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_1xy98sf', 'template_pgo92ik', e.target, 'user_Zqi4GcO6oRUVoAW5aOSbU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );

}
