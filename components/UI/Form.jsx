import React, { useState } from "react";
import classes from "../../styles/form.module.css";
import { sendEmail } from '../../util/sendEmail';
import { generatedText } from "@/util/chatgpt";
import Modal from "./Pop";


const Form = () => {

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
     sendEmail(formData);
     setShowModal(true)
    generatedText(formData);
    // setFormData({ name: '', email: '', message: '' });
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler} >
      <div className={`${classes.form__group}`}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
        {showModal &&
            <Modal onClose={() => setShowModal(false)}>
                Hello from the modal!
            </Modal>
        }
    </form>
  );
};

export default Form;
