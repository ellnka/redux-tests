import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { gameFetch } from "../redux/actions/game";
import { IMG_URL, GAME_URL } from "../redux/consts";


class GameCard extends Component{

    render() {
      return (
               <div className="card gameCard p-2">
                   <img className="card-img-top" src={IMG_URL + this.props.gameCard.img} alt={this.props.gameCard.title} />
                   <div className="card-body">
                     <h5 className="card-title">
                       <a href="#" onClick={this._gameOnClickHandler.bind(this)}>
                         {this.props.gameCard.title}
                       </a>
                     </h5>
                     <p className="card-text"> </p>
                   </div>
                 </div>);
    }

    _gameOnClickHandler() {
      let fileName = this.props.gameCard.id.replace("quiz/", "");
      let url = GAME_URL.replace("{file_name}",  fileName);
      console.log(url);
      this.props.gameFetch(url);
    }
}


GameCard.propTypes = {
  gameFetch: PropTypes.func.isRequired,
};

const mapStateToProps = () => {
  return { };
};

const mapDispatchToProps = dispatch => {
  return {
    gameFetch: url => dispatch(gameFetch(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameCard);
