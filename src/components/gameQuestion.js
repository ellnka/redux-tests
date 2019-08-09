import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setQuestion, gameFinish } from "../redux/actions/game";
import { IMG_URL } from "../redux/consts"

class GameQuestion extends Component {
  render() {
    const questionKey = this.props.game.question_ids[this.props.currentQuestionId];
    const question = this.props.game.questions[questionKey];
    let questionText = "";
    let questionImg = "";

    if (question.blocks.length > 0 && question.blocks[0].type === "p") {
        questionText = question.blocks[0].data;
    }
    if (question.blocks.length > 1 && question.blocks[1].type === "image") {
        questionImg = IMG_URL + question.blocks[1].data.small_url;
    }

    return <div className="card question">
        {(questionImg) ? <img className="card-img-top img-fluid question-img" src={questionImg} alt={questionText}></img> : ""}
        <div className="card-body">   
          <p className="card-text">
            {questionText}
          </p>

          <button className="btn btn-primary" onClick={this._nextOnClickHandler.bind(this)}>
            {this.props.game.settings.btn_next_text}
          </button>
        </div>
      </div>;
  }

  _nextOnClickHandler() {
      if(this.props.game.question_ids.length - 1 > this.props.currentQuestionId) {
        this.props.setQuestion(this.props.currentQuestionId + 1);
      } else {
        this.props.gameFinish();
      }  
  }
}

GameQuestion.propTypes = {
  game: PropTypes.object.isRequired,
  currentQuestionId: PropTypes.number,
  gameStart: PropTypes.func
};

const mapStateToProps = state => {
  return {
    game: state.game,
    currentQuestionId: state.gameCurrentQuestionId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setQuestion: url => dispatch(setQuestion(url)),
    gameFinish: () => dispatch(gameFinish())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameQuestion);
