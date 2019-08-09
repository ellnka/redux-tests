import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import GameCard from "./gameCard";

//import Game from "./game";

class Games extends Component {
  render() {
    console.log(this.props);
    if (!this.props.games) {
      // TODO: error component
      return <div />;
    }

    if (!this.props.isStarted) {
      return (
        <div className="d-flex align-content-start flex-wrap gameCards">
          {this.props.games.map(game =>  <GameCard gameCard={game} key={game.id} />)}
        </div>
      );
    }
    
    return (
      <div className="game">
        {this.props.game.title}
      </div>
    );

  }
}

Games.propTypes = {
    games: PropTypes.array.isRequired,
    game: PropTypes.object,
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool,
    isStarted: PropTypes.bool
};

const mapStateToProps = (state) => {
    return { 
        games: state.games,
        game: state.game,
        isStarted: state.gameIsStarted,
        hasErrored: state.gameHasErrored,
        isLoading: state.gameIsLoading
    };
};



export default connect(
    mapStateToProps
)(Games);
