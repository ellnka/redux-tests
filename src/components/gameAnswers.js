import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { gameAnswer } from "../redux/actions/game";

class GameAnswers extends Component {
  render() {
    const questionKey = this.props.game.question_ids[
      this.props.currentQuestionId
    ];
    const question = this.props.game.questions[questionKey];
    const answerKeys = question.answer_ids;
    const answers = this.props.game.answers;
    const questionAnswers = answerKeys.map(answer_id => answers[answer_id]);

    return (
      <div>
        {questionAnswers.map(answer => this._renderAnswerBlock(answer))}
      </div>
    );
  }

  _renderAnswerBlock(answer) {
    if (!answer.comment_blocks || answer.comment_blocks.length === 0) return;

    let type = answer.comment_blocks[0].type;
    let data = answer.comment_blocks[0].data;
    let comment = null;
    if (type === "p") {
      comment = (
        <div
          className={
            answer.correct ? "alert alert-success" : "alert alert-danger"
          }
          dangerouslySetInnerHTML={{ __html: data }}
        />
      );
    }
    let buttonClassName = "list-group-item list-group-item-action ";
    if (
      this.props.currentAnswerId !== answer.id ||
      !this.props.currentAnswerId
    ) {
      buttonClassName += "list-group-item-secondary";
    } else if (this.props.currentAnswerId === answer.id && answer.correct) {
      buttonClassName += "list-group-item-success";
    } else if (this.props.currentAnswerId === answer.id && !answer.correct) {
      buttonClassName += "list-group-item-danger";
    }

    return (
      <div key={answer.id}>
        <button
          className={buttonClassName}
          id={answer.id}
          onClick={
            !this.props.currentAnswerId
              ? this._answerOnClickHandler.bind(this)
              : ""
          }
        >
          {answer.text}
        </button>
        {this.props.currentAnswerId === answer.id ? comment : ""}
      </div>
    );
  }

  _answerOnClickHandler(event) {
    console.log(this.props.answers);
    let answers = this.props.answers ? this.props.answers : [];
    this.props.gameAnswer(answers, event.target.id);
  }
}

GameAnswers.propTypes = {
  game: PropTypes.object.isRequired,
  answers: PropTypes.array,
  currentQuestionId: PropTypes.number,
  currentAnswerId: PropTypes.string,
  gameAnswer: PropTypes.func
};

const mapStateToProps = state => {
  return {
    game: state.game,
    answers: state.gameAnswers,
    currentQuestionId: state.gameCurrentQuestionId,
    currentAnswerId: state.gameCurrentAnswerId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gameAnswer: (prevAnswers, answer) =>
      dispatch(gameAnswer(prevAnswers, answer))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameAnswers);
