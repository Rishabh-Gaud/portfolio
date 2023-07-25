import emailjs from 'emailjs-com';
export const sendEmail = async (formData) => {
  console.log(formData);
    emailjs.send('service_yaylque', 'template_sxyy3qb', formData, '70fnyNwHsaPM7vTH3')
      .then((result) => {
        console.log("formdata >>>>>>>>>>>",formData);
        console.log('Email sent successfully:', result.text);
      }, (error) => {
        console.error('Error sending email:', error);
      });
};
