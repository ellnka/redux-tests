import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import GameCard from "./gameCard";
import Game from "./game";

//import Game from "./game";

class Games extends Component {
  render() {
    console.log(this.props);

    if (!this.props.game) {
      return (
        <div className="d-flex align-content-start flex-wrap gameCards">
          {this.props.games.map(game =>
            <GameCard gameCard={game} key={game.id} />
          )}
        </div>
      );
    }

    return <Game />;
  }
}

Games.propTypes = {
  games: PropTypes.array.isRequired,
  game: PropTypes.object
};

const mapStateToProps = state => {
  return {
    games: state.games,
    game: state.game
  };
};

export default connect(mapStateToProps)(Games);
