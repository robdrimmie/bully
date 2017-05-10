import React from 'react';

const { array } = React.PropTypes;

const ImageGrid = ({ links }) => {
  const images = links.map((link, i) => {
    return (
      <div key={i} className="fl-ns w-50-ns pa3">
        <img src={`/images/${link}`} />
      </div>
    );
  });

  return (
    <div className="cf">
      {images}
    </div>
  );
};

ImageGrid.propTypes = {
  links: array
};

export default ImageGrid;
