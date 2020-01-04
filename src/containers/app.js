import React from 'react';
import { connect } from 'react-redux'
import counter from '../pages/counter'
import {Add,Sub} from "../redux/actions/countAction";

const mapStateToProps = state => {
    return {
        count: state.counter.count,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        countAdd: (count) => {
            dispatch(Add)
        },
        countSub: (count)=> {
            dispatch(Sub)
        }
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(counter)

export default App;