import emailjs from 'emailjs-com';
require('dotenv').config();

// format to send email when imported
// sendEmail('Nick','<h3>bar name</h3>','nick@gmail');


const sendEmail = (to_name, htmlMessage, sendToEmail) => {
    const emailParams = {
        to_name,
        from_name: 'Puzzles',
        htmlMessage, //message: `<h1>This isin an h1</h1>`,
        sendToEmail
    }
    
    // console.log(emailParams.htmlMessage);


    // emailjs.send(
    //     process.env.REACT_APP_SERVICE_ID,
    //     'template_BarCrawl',
    //     emailParams,
    //     process.env.REACT_APP_USER_ID)
    // .then(result => {
    //     console.log(result);
    // }, error => {
    //     console.error(error);
    // })
}

export default sendEmail