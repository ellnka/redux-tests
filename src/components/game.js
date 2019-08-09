import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    questionSet,
    answersCountIncrement,
    scoreIncrement
} from "../redux/actions/game";

class Game extends Component {
    componentDidMount() {
        if (this.props.questionIndex >= 0) return;

        this.props.questionSet(0);
    }

    render() {
        return (
            <div>
                <p> {this.props.test.name} </p>
                <p> {this.props.test.description} </p>
                <p> {this._renderQuestion()} </p>
            </div>
        );
    }

    setQuestion(value) {
        this.setState({ questionIndex: value });
    }

    _renderQuestion() {
        if (this.props.questionIndex !== 0 && !this.props.questionIndex) return;
        if (this.props.questionIndex < this.props.test.test.length) {
            const question = this.props.test.test[this.props.questionIndex];
            return (
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            {" "}
                            Score: {this.props.score || 0} of {this.props.answersCount || 0}/
              {this.props.test.test.length}{" "}
                        </div>
                        <div className="card-text"> {question.question} </div>
                    </div>
                    <div className="btn-group-vertical">
                        {question.answers.map((answer, index) => (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={this._answerOnClickHandler.bind(this)}
                                id={index}
                                key={index}
                            >
                                {" "}
                                {answer.text}{" "}
                            </button>
                        ))}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <span> Test completed! </span>
                    <div>
                        {" "}
                        Score: {this.props.score || 0} of {this.props.test.test.length}{" "}
                    </div>
                </div>
            );
        }
    }

    _answerOnClickHandler(event) {
        const answerId = event.target.id;
        const question = this.props.test.test[this.props.questionIndex];
        const isAnswerValid = question.answers[answerId].valid;

        if (isAnswerValid) {
            this.props.scoreIncrement();
        }
        this.props.answersCountIncrement();
        this.props.questionSet(this.props.questionIndex + 1);
    }
}

Game.propTypes = {
    questionSet: PropTypes.func,
    answersCountIncrement: PropTypes.func,
    scoreIncrement: PropTypes.func,

    test: PropTypes.object.isRequired,
    questionIndex: PropTypes.number,
    answersCount: PropTypes.number,
    score: PropTypes.number
};

const mapStateToProps = state => {
    return {
        test: state.test,
        questionIndex: state.questionIndex,
        answersCount: state.answersCount,
        score: state.score
    };
};

const mapDispatchToProps = dispatch => {
    return {
        questionSet: questionIndex => dispatch(questionSet(questionIndex)),
        answersCountIncrement: () => dispatch(answersCountIncrement()),
        scoreIncrement: () => dispatch(scoreIncrement())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);
