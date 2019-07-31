import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { testStart } from "../redux/actions/tests";
import Test from "./test";




class TestList extends Component {

    render() {
        const tests = this.props.tests;
        if (this.props.test && this.props.test.hasOwnProperty("id")) {
            return (<div className="testsApp">
                        <h5> Test: </h5>
                        <Test test={this.props.test} />
                    </div>);
        }

        return (<div>
                    <ul>
                        {tests.map((test) => <li key={test.id}> <a href="#" id={test.id} onClick={this._testOnClickHandler.bind(this)}> {test.name} </a> </li>)} 
                    </ul>
                </div>);     
    }

    _testOnClickHandler(event) {
        const $el = event.target;
        const testId = new Number($el.id);
        let test = this.props.tests.find(test => test.id == testId);
        this.props.testStart(test);
    }

}

TestList.propTypes = {
    testStart: PropTypes.func.isRequired,
    tests: PropTypes.array.isRequired,
    test: PropTypes.object

};

const mapStateToProps = (state) => {
    const tests = state.tests;
    const test = state.test || null;
    return {
        tests, test
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        testStart: (test) => dispatch(testStart(test))
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestList);


