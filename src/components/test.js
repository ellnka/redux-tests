import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";


class Test extends Component {

    render() {
       return <div>
                <p> {this.props.currentTest.name} </p>  
                <p> {this.props.currentTest.description} </p>  
              </div>
    } 



}


Test.propTypes = {
    currentTest: PropTypes.array.isRequired,
    currentQuestion: PropTypes.object,
    score: PropTypes.number
};

const mapStateToProps = (state) => {
    console.log("mapStateToProps");
    console.log(state);
    return {
        currentTest: state.currentTest
    };
};

const mapDispatchToProps = (dispatch) => {
    
};


export default connect(
    mapStateToProps
)(Test);

