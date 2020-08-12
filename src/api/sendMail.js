import axios from 'axios';

const sendMail = async (data) => console.log({ data }) || await axios.post(process.env.MAIL_URL, { body: data });

export default sendMail;