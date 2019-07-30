import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { testStart } from "../redux/actions/tests";
import Test from "./test";




class TestList extends Component {
 

    render() {
                console.log("state");
        console.log(JSON.stringify(this.state));
        console.log("props");
        console.log(JSON.stringify(this.props));

        const tests = this.props.tests;
        if (this.props.currentTest && this.props.currentTest.hasOwnProperty("id")) {
            return (<div className="testsApp">
                <h5> Test: </h5>
                <Test currentTest={this.propsCurrentTest} />
            </div>
            );
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
        console.log(testId);
        console.log(this.props.tests);
        let test = this.props.tests.find(test => test.id == testId );
        console.log(test);
        console.log(this.props);
        this.props.testStart(test);
    }
}

TestList.propTypes = {
    testStart: PropTypes.func.isRequired,
    tests: PropTypes.array.isRequired,
    currentTest: PropTypes.array

};

const mapStateToProps = (state) => {
    console.log("mapStateToProps");
    console.log(JSON.stringify(state));
    const tests = state.tests;
    const currentTest = state.currentTest || null;

    return {
        tests, currentTest
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


