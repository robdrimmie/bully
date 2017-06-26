import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const ListView = ({ clicked, equipment }) => {
  const details = equipment.map((unit, index) => (
    <ListItem
      key={unit.id}
      unit={unit}
      role="link"
      clicked={clicked}
      index={index}
    />
  ));

  return (
    <div>
      {details}
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
