import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import GameGreeting from "./gameGreeting";
import GameResults from "./gameResults";
import GameQuestion from "./gameQuestion";
import GameAnswers from "./gameAnswers";
import { setQuestion, gameFinish } from "../redux/actions/game";

class Game extends Component {
  render() {
    if (!this.props.isStarted && !this.props.isFinished) {
      return <GameGreeting />;
    }
    if (this.props.isFinished) {
      //return <GameResults />;
      return <GameResults />;
    }

    return (
      <div className="card question">
        <GameQuestion />
        <GameAnswers />
        {this.props.currentAnswerId
          ? <button
              className="btn btn-primary"
              onClick={this._nextQuestionOnClickHandler.bind(this)}
            >
              {this.props.game.settings.btn_next_text}
            </button>
          : <div />}
      </div>
    );
  }

  _nextQuestionOnClickHandler() {
    if (
      this.props.game.question_ids.length - 1 >
      this.props.currentQuestionId
    ) {
      this.props.setQuestion(this.props.currentQuestionId + 1);
    } else {
      this.props.gameFinish();
    }
  }
}

Game.propTypes = {
  game: PropTypes.object.isRequired,
  currentQuestionId: PropTypes.number,
  isStarted: PropTypes.bool,
  isFinished: PropTypes.bool,
  currentAnswerId: PropTypes.string,
  answers: PropTypes.array
};

const mapStateToProps = state => {
  return {
    game: state.game,
    answers: state.gameAnswers,
    currentQuestionId: state.gameCurrentQuestionId,
    isStarted: state.gameIsStarted,
    isFinished: state.gameIsFinished,
    currentAnswerId: state.gameCurrentAnswerId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setQuestion: url => dispatch(setQuestion(url)),
    gameFinish: () => dispatch(gameFinish())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
