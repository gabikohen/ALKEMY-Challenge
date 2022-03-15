
  
require('dotenv').config()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'test@example.com',
  from: 'gabokohen@gmail.com', // Use the email address or domain you verified above
  subject: 'Confirmando email para ALKEMY',
  text: "prueba del email",
  html: `<strong> "Challenge de alkemy" </strong>`,

  
};
//ES6
sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();


module.exports = sgMail;