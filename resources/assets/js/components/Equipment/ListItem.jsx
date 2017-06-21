import React from 'react';
import PropTypes from 'prop-types';
import Rate from './Rate';

const ListItem = ({ clicked, index, unit }) => {
  const picture = unit.picture === '' ? 'noimage2.png' : unit.picture;
  const backgroundStyle = {
    backgroundImage: `url('images/${picture}')`,
  };

  const unitClicked = () => {
    clicked(unit);
  };

  return (
    <div
      key={unit.id}
      className="fl w-100 w-25-ns pa2"
      role="link"
      onClick={unitClicked}
      tabIndex={index}
    >
      <div className="ba b-light-grey bg-white pv0 pointer">
        <div
          className="relative bg-green cover bg-center aspect-ratio aspect-ratio--4x3"
          style={backgroundStyle}
        >
          <Rate value={global.Math.ceil(unit.rate)} />
        </div>
        <div className="cf" />
        <div className="dark-grey bg-off-white ma0 pa3">
          {unit.make} {unit.model}
        </div>
      </div>
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
