import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import backgroundImage from './backgroundImage';
import displayRate from './displayRate';

import HoverOverlay from './HoverOverlay';
import Rate from './Rate';

const ListItem = ({ clicked, index, unit }) => {
  const backgroundStyle = backgroundImage(unit.picture);
  const value = displayRate(unit.rate);

  const unitClicked = () => {
    clicked(unit);
  };

  return (
    <div
      key={unit.id}
      className="fl w-100 w-50-m w-25-l pa2"
      role="link"
      onClick={unitClicked}
      tabIndex={index}
    >
      <Link
        className="link"
        to={`/equipment/${unit.id}`}
      >
        <div className="ba b-light-grey pointer">
          <div
            className="cover bg-center aspect-ratio aspect-ratio--4x3"
            style={backgroundStyle}
          >
            <HoverOverlay />
            <Rate value={value} />
          </div>

          <div className="dark-grey bg-off-white pa3">
            {unit.make} {unit.model}
          </div>
        </div>
      </Link>
    </div>
  );
};

ListItem.propTypes = {
  clicked: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  unit: PropTypes.shape({
    make: PropTypes.string,
    model: PropTypes.string,
    picture: PropTypes.string,
    rate: PropTypes.string,
  }).isRequired,
};

export default ListItem;
