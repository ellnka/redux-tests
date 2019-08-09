import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import GameGreeting from "./gameGreeting"
import GameQuestion from "./gameQuestion";

class Game extends Component {

    render() {
        if (!this.props.isStarted && !this.props.isFinished) {
            return <GameGreeting />;
        }
        if (this.props.isFinished) {
            //return <GameResults />;
            return <div> Game is finished </div>
        }
        return <GameQuestion />;
    }

}

Game.propTypes = {
    game: PropTypes.object.isRequired,
    currentQuestionId: PropTypes.number,
    isStarted: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        game: state.game,
        currentQuestionId: state.gameCurrentQuestionId,
        isStarted: state.gameIsStarted,
        isFinished: state.gameIsFinished
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
