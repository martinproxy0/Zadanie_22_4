import React, { PropTypes } from 'react';

const Hello = (props, context) => {
  return (
    <div>
      <p>empty component {context}</p>
    </div>
  );
};

Hello.propTypes = {
  name: PropTypes.string,
};

export default Hello;
