import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';

import EquipmentListView from './components/Equipment/ListView';
import EquipmentDetailView from './components/Equipment/DetailView';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      equipment: [],
      selected: {
        make: '',
        model: '',
        picture: '',
        rate: '',
        year: '',
      },
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
    const detail = () => (
      <EquipmentDetailView
        unit={this.state.selected}
      />
    );

    const list = () => (
      <EquipmentListView
        equipment={this.state.equipment}
        clicked={this.clicked}
      />
    );


    return (
      <Router>
        <div className="main">
          <div>
            <div className="mw9 center pt4">
              <div className="main-head-logo pl4 pv2">
                <Link
                  className="link"
                  to="/"
                >
                  <img src="images/dozr_logo.svg" alt="DOZR" />
                </Link>
              </div>
              <div className="bb b-light-grey mh4 mt1 mb4" />
            </div>
          </div>

          <div className="main-content">
            <Route exact path="/" render={list} />
            <Route path="/equipment/:id" render={detail} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
