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
    this.detail = this.detail.bind(this);
    this.list = this.list.bind(this);
  }

  componentDidMount() {
    global.fetch(
      'http://starter.dozr.dev/api/equipment',
    ).then(response => (
      response.json()
    )).then((equipment) => {
      this.setState(prevState => (
        {
          equipment,
          selected: prevState.selected,
        }
      ));
    });
  }

  clicked(selected) {
    this.setState({
      equipment: this.state.equipment,
      selected,
    });
  }

  detail(params) {
    const selected = this.state.equipment.find(unit => (
      unit.id === parseInt(params.match.params.id, 10)
    ));

    return (
      <EquipmentDetailView
        unit={selected || this.state.selected}
      />
    );
  }

  list() {
    return (
      <EquipmentListView
        equipment={this.state.equipment}
        clicked={this.clicked}
      />
    );
  }

  render() {
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
                  <img src="/images/dozr_logo.svg" alt="DOZR" />
                </Link>
              </div>
              <div className="bb b-light-grey mh4 mt1 mb4" />
            </div>
          </div>

          <div className="main-content">
            <Route exact path="/" render={this.list} />
            <Route path="/equipment/:id" render={this.detail} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
