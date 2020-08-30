import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { addCharacterById } from "../actions/actions";

class CharacterList extends Component {
  render() {
    return (
      <div>
        <h3>Characters</h3>
        <ul className="list-group">
          {this.props.characters.map((c) => {
            return (
              <li key={c.id} className="list-group-item">
                <div className="list-item">{c.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.addCharacterById(c.id)}
                >
                  +
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
  console.log(state);
  return {
    characters: state.characters,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ addCharacterById }, dispatch);
// };
export default connect(mapStateToProps, { addCharacterById })(CharacterList);
