import React from 'react';
import EquipmentListView from './components/Equipment/ListView';
import EquipmentDetailView from './components/Equipment/DetailView';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      equipment: [],
      selected: null,
    };

    this.clicked = this.clicked.bind(this);
  }

  componentDidMount() {
    // do API, setstate, etc.
    global.fetch(
      'http://starter.dozr.dev/api/equipment',
    ).then(response => (
      response.json()
    )).then((equipment) => {
      this.setState({
        equipment,
        selected: this.state.selected,
      });
    });
  }

  clicked(selected) {
    this.setState({
      equipment: this.state.equipment,
      selected,
    });
  }

  render() {
    const content = this.state.selected ?
    (
      <EquipmentDetailView
        selected={this.state.equipment[this.state.selected]}
      />
    ) : (
      <EquipmentListView
        equipment={this.state.equipment}
        clicked={this.clicked}
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
  }
}

export default Main;
