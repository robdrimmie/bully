import React from 'react';

const Rate = ({ value }) => (
  <div>
    <div className="absolute bottom0 left0 bg-mid-grey o-50 mid-grey lh-title ma0 mw-50 pa2">
      <span className="b f3">${value}</span>
      <span className="f7">/mo</span>
    </div>
    <div className="absolute bottom0 left0 bg-transparent white lh-title ma0 mw-50 pa2">
      <span className="b f3">${value}</span>
      <span className="f7">/mo</span>
    </div>
  </div>
);

Rate.propTypes = {
  value: React.PropTypes.number,
};

Rate.defaultProps = {
  value: 0,
};

export default Rate;
