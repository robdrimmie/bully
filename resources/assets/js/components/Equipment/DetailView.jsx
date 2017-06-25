import React from 'react';
import PropTypes from 'prop-types';

import backgroundImage from './backgroundImage';
import displayRate from './displayRate';

const DetailView = ({ unit }) => {
  const backgroundStyle = backgroundImage(unit.picture);
  const year = unit.year.substring(0, 4);
  const value = displayRate(unit.rate);

  return (
    <div className="pa2">
      <div className="flex flex-column flex-row-ns">

        <div
          className="h5 w-100 mw5 cover bg-center"
          style={backgroundStyle}
        />

        <div className="w-100 pl3-ns">

          <h1 className="f3 fw1 mt0 lh-title dark-grey">
            {year} {unit.make} {unit.model}
          </h1>

          <div className="f6 lh-copy mt2 mb4 mid-grey">
            Monthly rate <span className="pl4">${value}</span>
          </div>

          <div className="pt2">
            <a
              className="b f6 link btn-hover ba ph3 pv2 mb2 mr2 dib gold b-gold br1"
              href="#0"
            >
              Book Rental
            </a>
            <a
              className="b f6 link btn-hover ba ph3 pv2 mb2 mr2 dib gold b-gold br1"
              href="#0"
            >
              Purchase
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

DetailView.propTypes = {
  unit: PropTypes.shape({
    make: PropTypes.string,
    model: PropTypes.string,
    picture: PropTypes.string,
    rate: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
};

export default DetailView;
