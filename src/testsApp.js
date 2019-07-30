import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import TestList from "./components/testList";
import { testsFetch } from './redux/actions/tests';

const url = "https://api.myjson.com/bins/15iptp";





class TestsApp extends Component {

    componentDidMount() {
        this.props.testsFetch(url);
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Ooops... tests cannot be loaded :-( </p>
        }

        if (this.props.isLoading) {
            return <p> Loading... </p>
        }

        const tests = this.props.tests;
        console.log(tests);
        return (<div className="testsApp">
                    <h5> Tests: </h5>
            <TestList tests={tests}/>
                </div>
        );
    }
};

TestsApp.propTypes = {
    testsFetch: PropTypes.func.isRequired,
    tests: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,

    currentTest: PropTypes.object

};

const mapStateToProps = (state) => {
    const tests = state;
    return {
        tests: state.tests ,
        hasErrored: state.testsHasErrored,
        isLoading: state.testsIsLoading,
        currentTest: state.currentTest || null
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        testsFetch: (url) => dispatch(testsFetch(url))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestsApp);
