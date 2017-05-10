import React from 'react';

const { array } = React.PropTypes;

const ImageGrid = React.createClass({
  propTypes: {
    links: array
  },

  render () {
    const images = this.props.links.map((link, i) => {
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
  }
});

export default ImageGrid;
