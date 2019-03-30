const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys')

const myMailer = (recipients, subject, body) => {
    sgMail.setApiKey(keys.sendGridKey);
const msg = {
  to: recipients,
  from: {
    email: 'sanditya2510@gmail.com',
    name: 'Sandy Sri'
  },
  replyTo: 'no-reply@email.com',
  subject,
  text: 'Hello plain world!',
  html: body,
  trackingSettings: {
    clickTracking: {
      enable: true
    },
    openTracking: {
      enable: true
    },
    subscriptionTracking: {
      enable: true
    }
  },
};
sgMail
  .sendMultiple(msg)
  .then(() => console.log('Mail sent successfully'))
  .catch(error => console.error(error.toString()));
}
module.exports = myMailer