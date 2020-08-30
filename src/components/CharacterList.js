import React, { Component } from "react";
import { connect } from "react-redux";

class CharacterList extends Component {
  render() {
    return (
      <div>
        <h3>Characters:</h3>
        <ul>
          {this.props.characters.map((c) => {
            return (
              <li key={c.id}>
                <div>{c.name}</div>
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
export default connect(mapStateToProps, null)(CharacterList);
