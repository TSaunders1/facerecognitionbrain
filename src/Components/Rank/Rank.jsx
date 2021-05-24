import React from 'react';

// eslint-disable-next-line react/prop-types
const Rank = ({ name, entries }) => (
  <div>
    <div className="white f3">
      {`${name}, your current entry count is...`}
    </div>
    <div className="white f1">
      {entries}
    </div>
  </div>
);

export default Rank;
