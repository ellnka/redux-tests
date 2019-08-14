import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { gameStart, setQuestion, gameReset } from "../redux/actions/game";

class GameResults extends Component {
  render() {
    const result = this._getResult();
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {result.title}
          </h5>
          <p className="card-text">
            {result.subtitle}
          </p>

          <button
            className="list-group-item list-group-item-action list-group-item-secondary"
            onClick={this._startOnClickHandler.bind(this)}
          >
            {this.props.game.settings.btn_replay_text}
          </button>
          <button
            className="list-group-item list-group-item-action list-group-item-secondary"
            onClick={this._resetOnClickHandler.bind(this)}
          >
            {this.props.game.settings.btn_next_text}
          </button>
        </div>
      </div>
    );
  }

  _startOnClickHandler() {
    this.props.gameStart();
    this.props.setQuestion(0);
  }

  _resetOnClickHandler() {
    this.props.gameReset();
  }

  _calcCorrectPercent() {
    const correctAnswers = this.props.answers.filter(
      answer => this.props.game.answers[answer].correct
    );
    return this.props.answers.length > 0
      ? correctAnswers.length / this.props.answers.length
      : 0;
  }

  _getResult() {
    const allResults = this.props.game.result.shares;
    let step = 1 / allResults.length;
    let correctPercent = this._calcCorrectPercent();
    for (let i = 0; i <= allResults.length; i++) {
      if ((i + 1) * step >= correctPercent) {
        return allResults[i];
      }
    }
    return { title: "", subtitle: "" };
  }
}

GameResults.propTypes = {
  game: PropTypes.object.isRequired,
  answers: PropTypes.array,
  gameStart: PropTypes.func,
  gameReset: PropTypes.func,
  setQuestion: PropTypes.func
};

const mapStateToProps = state => {
  return {
    game: state.game,
    answers: state.gameAnswers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gameStart: url => dispatch(gameStart(url)),
    gameReset: url => dispatch(gameReset(url)),
    setQuestion: question_id => dispatch(setQuestion(question_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameResults);
