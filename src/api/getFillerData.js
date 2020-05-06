import axios from 'axios'

export default async ({ paragraphs }) => {
  const res = await axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${paragraphs}&start-with-lorem=1&format=text`)
  return res.data
};