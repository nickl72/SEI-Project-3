import emailjs from 'emailjs-com';
require('dotenv').config();


const sendEmail = (e) => {
    // emailjs.init(process.env.REACT_APP_USER_ID)
    const emailParams = {
        to_name: 'Nick',
        from_name: 'Puzzles',
        message: 'This is a test',
        sendToEmail: 'nlapointe72@gmail.com'
    }
    console.log(process.env);
    emailjs.send(process.env.REACT_APP_SERVICE_ID,'template_BarCrawl',emailParams,process.env.REACT_APP_USER_ID)
    .then(result => {
        console.log(result);
    }, error => {
        console.error(error);
    })
}

export default sendEmail