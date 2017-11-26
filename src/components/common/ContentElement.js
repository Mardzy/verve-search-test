import React from 'react';

const ContentElement = ({content}) => {
  // console.log('logging in ContentElement', content);
  return (
    <div id="content-wrapper">
      <h1>Verve Search Test</h1>
      <h1>{content}</h1>
    </div>
  );
};

export default ContentElement;
