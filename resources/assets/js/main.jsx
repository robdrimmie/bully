import React from 'react';
import EquipmentListView from './components/Equipment/ListView';
import EquipmentDetailView from './components/Equipment/DetailView';

let equipment = [];
const selected = null;

equipment = [
  {
    id: 1,
    make: 'fake make',
    model: 'fake model',
    year: '2005-01-01',
    picture: '',
    rate: 5000,
    created_at: '2005-01-01 03:03:03',
    updated_at: '2005-01-01 03:03:03',
  },
  {
    id: 2,
    make: 'fake make',
    model: 'fake model',
    year: '2005-01-01',
    picture: '',
    rate: 5000,
    created_at: '2005-01-01 03:03:03',
    updated_at: '2005-01-01 03:03:03',
  },
  {
    id: 3,
    make: 'fake make',
    model: 'fake model',
    year: '2005-01-01',
    picture: '',
    rate: 5000,
    created_at: '2005-01-01 03:03:03',
    updated_at: '2005-01-01 03:03:03',
  },
  {
    id: 4,
    make: 'fake make',
    model: 'fake model',
    year: '2005-01-01',
    picture: '',
    rate: 5000,
    created_at: '2005-01-01 03:03:03',
    updated_at: '2005-01-01 03:03:03',
  },
  {
    id: 5,
    make: 'John Deere',
    model: '450K2',
    year: '2005-01-01',
    picture: '6115M.jpg',
    rate: 5000,
    created_at: '2005-01-01 03:03:03',
    updated_at: '2005-01-01 03:03:03',
  },
];

const Main = () => {
  const content = selected ?
    (
      <EquipmentDetailView
        selected={equipment[0]}
      />
    ) : (
      <EquipmentListView
        equipment={equipment}
      />
    );

  return (
    <div className="main">
      <div>
        <div className="mw9 center pt4">
          <div className="main-head-logo pl4 pv2">
            <img src="images/dozr_logo.svg" alt="DOZR" />
          </div>
          <div className="bb b-light-grey mh4 mt1 mb4" />
        </div>
      </div>

      <div className="main-content">
        {content}
      </div>
    </div>
  );
};

export default Main;
