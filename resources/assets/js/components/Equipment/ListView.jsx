import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const ListView = ({ clicked, equipment }) => {
  const details = equipment.map((unit, index) => {
    return (
      <ListItem
        key={unit.id}
        unit={unit}
        className="fl w-100 w-25-ns pa2"
        role="link"
        clicked={clicked}
        index={index}
      />
    );
  });

  return (
    <div className="mw9 center ph3-ns">
      <div className="cf ph2-ns">
        {details}
      </div>
    </div>
  );
};

ListView.propTypes = {
  clicked: PropTypes.func.isRequired,
  equipment: PropTypes.arrayOf(PropTypes.object),
};

ListView.defaultProps = {
  equipment: [],
};

export default ListView;
