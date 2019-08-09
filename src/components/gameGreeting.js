import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { gameStart, setQuestion } from "../redux/actions/game";

class GameGreeting extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {this.props.game.title}
          </h5>
          <p className="card-text">
            {this.props.game.second_title}
          </p>

          <button className="btn btn-primary" onClick = {this._startOnClickHandler.bind(this)}>
            {this.props.game.settings.btn_start_text}
          </button>

        </div>
      </div>
    );
  }

  _startOnClickHandler() {
    this.props.gameStart();
    this.props.setQuestion(0);
  }


}

GameGreeting.propTypes = {
  game: PropTypes.object.isRequired,
  gameStart: PropTypes.func,
  setQuestion: PropTypes.func
};

const mapStateToProps = state => {
  return {
    game: state.game
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gameStart: url => dispatch(gameStart(url)),
    setQuestion: question_id => dispatch(setQuestion(question_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameGreeting);
