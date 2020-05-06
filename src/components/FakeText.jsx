import React, { useState, useEffect } from 'react'
import getFillerData from '../api/getFillerData'

const FakeText = ({ paragraphs }) => {

  const [fakeText, setFakeText] = useState('');

  useEffect(() => { getFillerData({ paragraphs }).then((res) => setFakeText(res)) }, []);

  return <div>{fakeText}</div>
}

export default FakeText
