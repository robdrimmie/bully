import React from 'react';

const ListView = ({ equipment }) => {
  const details = equipment.map((unit) => {
    const picture = unit.picture === '' ? 'noimage2.png' : unit.picture;
    const backgroundStyle = {
      backgroundImage: `url('images/${picture}')`,
    };

    return (
      <div
        key={unit.id}
        className="fl w-100 w-25-ns pa2"
      >
        <div className="ba b-light-grey bg-white pv0">
          <div className="relative bg-green cover bg-center aspect-ratio aspect-ratio--4x3" style={backgroundStyle}>
            <div className="absolute bottom0 left0 bg-mid-grey o-40 mid-grey lh-title ma0 mw-50 pa1">
              <span className="b f5">${unit.rate}</span>
              <span className="f7">/mo</span>
            </div>
            <div className="absolute bottom0 left0 bg-transparent white lh-title ma0 mw-50 pa1">
              <span className="b f5">${unit.rate}</span>
              <span className="f7">/mo</span>
            </div>
          </div>
          <div className="cf" />
          <div className="dark-grey bg-off-white ma0 pa3">
            {unit.make} {unit.model}
          </div>
        </div>
      </div>
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
  equipment: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default ListView;
