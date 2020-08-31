import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCharById } from "../actions/actions";
import { bindActionCreators } from "redux";

class HeroList extends Component {
  render() {
    return (
      <div>
        <h3>Your hero Squad</h3>
        <ul className="list-group">
          {this.props.heroes.map((hero) => {
            return (
              <li key={hero.id} className="list-group-item">
                <div className="list-item">{hero.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.removeCharById(hero.id)}
                >
                  X
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    heroes: state.heroes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ removeCharById }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
