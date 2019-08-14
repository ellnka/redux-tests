import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { IMG_URL } from "../redux/consts";

class GameQuestion extends Component {
  render() {
    const questionKey = this.props.game.question_ids[
      this.props.currentQuestionId
    ];
    const question = this.props.game.questions[questionKey];

    let questionText = "";
    let questionImg = "";

    if (question.blocks.length > 0 && question.blocks[0].type === "p") {
      questionText = question.blocks[0].data;
    }
    if (question.blocks.length > 1 && question.blocks[1].type === "image") {
      questionImg = IMG_URL + question.blocks[1].data.small_url;
    }

    return (
      <div>
        {questionImg
          ? <img
              className="card-img-top img-fluid question-img"
              src={questionImg}
              alt={questionText}
            />
          : ""}
        <div className="card-body">
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: questionText }}
          />
        </div>
      </div>
    );
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(GameQuestion);
