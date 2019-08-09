import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Games from "./components/games";
import Loading from "./components/loading";

import { gamesFetch } from "./redux/actions/games";
import { GAMES_URL } from "./redux/consts";


class MeduzaApp extends Component {


  componentDidMount() {
      this.props.gamesFetch(GAMES_URL);
  }

    render() {

        if (this.props.hasErrored) {
            return <p> Ooops... Games cannot be loaded :-( </p>;
        }

        if (this.props.isLoading) {
            return <Loading />;
        }

        return (
            <div className="meduzaApp container">
                <Games games = { this.props.games } />
            </div>
        );
  }
}

MeduzaApp.propTypes = {
  gamesFetch: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    games: state.games,
    hasErrored: state.gamesHasErrored,
    isLoading: state.gamesIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gamesFetch: url => dispatch(gamesFetch(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MeduzaApp);
