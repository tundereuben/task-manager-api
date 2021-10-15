const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tundeogunjimi@gmail.com',
        subject: 'Thanks for signing up!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tundeogunjimi@gmail.com',
        subject: 'Sorry to see you go!',
        text: `${name}, it's painful to see you go. Tell me why you left.`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}