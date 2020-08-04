import axios from 'axios';

const url = "https://us-central1-elephantech-node.cloudfunctions.net/sendMail"

const sendMail = async (data) => {
  console.log(data)
  const t = await axios.post(url, data);
  console.log(t)
  return t;
}

export default sendMail;