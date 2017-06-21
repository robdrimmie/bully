import React from 'react';
import PropTypes from 'prop-types';

const DetailView = ({ unit }) => {
  const picture = unit.picture === '' ? 'noimage2.png' : unit.picture;
  const backgroundStyle = {
    backgroundImage: `url('images/${picture}')`,
  };

  return (
    <div className="pl4">
      <div className="flex flex-column flex-row-ns">
        <div className="h5 w5 cover bg-center pr3-ns mb4 mb0-ns" style={backgroundStyle} />
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 mt0 lh-title dark-grey">
            {unit.year} {unit.make} {unit.model}
          </h1>
          <div className="f6 f5-l lh-copy mt2 mb4 mid-grey">
            Monthly rate: ${unit.rate}
          </div>
          <div className="pt2">
            <a
              className="b f6 link btn-hover ba ph3 pv2 mb2 mr2 dib gold b-gold"
              href="#0"
            >
              Book Rental
            </a>
            <a
              className="b f6 link btn-hover ba ph3 pv2 mb2 dib gold b-gold"
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
    rate: PropTypes.number,
    year: PropTypes.string,
  }).isRequired,
};

export default DetailView;
