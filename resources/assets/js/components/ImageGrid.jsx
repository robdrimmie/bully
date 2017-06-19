import React from 'react';
import PropTypes from 'prop-types';

const { arrayOf, object } = PropTypes;

const ImageGrid = ({ links }) => {
  const images = links.map(link => (
    (
      <div key={link.id} className="fl-ns w-50-ns pa3">
        <img src={`/images/${link}`} alt="" />
      </div>
    )
  ));

  return (
    <div className="cf">
      {images}
    </div>
  );
};

ImageGrid.propTypes = {
  links: arrayOf(object),
};

ImageGrid.defaultProps = {
  links: [],
};

export default ImageGrid;
