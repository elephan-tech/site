import React, { useState, useEffect } from 'react';
import getFillerData from '../api/getFillerData';
import { number } from 'prop-types';

const FakeText = ({ paragraphs }) => {

  const [fakeText, setFakeText] = useState('');

  useEffect(() => { getFillerData({ paragraphs }).then((res) => setFakeText(res)); }, []);

  return <div>{fakeText}</div>;
};


FakeText.propTypes = {
  paragraphs: number
};
export default FakeText;
