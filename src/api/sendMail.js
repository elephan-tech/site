import { axios, db } from '../firebase/firebaseConfig'

const sendEmail = () => {
  axios.post(process.env.MAIL_URL, formData).then(res => {
    console.log({ res })
    db.collection('clients').add({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date(),
    })
  })
    .catch(error => {
      console.log(error)
    })
}
export default sendEmail;