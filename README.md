## 创建react项目
```
# 全局安装脚手架
npm i create-react-app -g
# 构建一个react的项目
create-react-app react-redux-demo
```
## 安装赖
```
cnpm i redux -S
cnpm i react-redux -S
```
## 创建目录文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200104163935584.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDM3MzkyNQ==,size_16,color_FFFFFF,t_70)
## 编写action
```
// actions/countAction.js

export const Add = {
    type:'add'
}
export const Sub  = {
    type:'sub'
}
```
## 编写reducers
```
//	reducers /counter.js

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'add': return Object.assign({}, state, {
            count: state.count + 1
        });
        case 'sub': return Object.assign({}, state, {
            count: state.count - 1
        });
        default: return state;
    }
}
//设置一个初始值
const initialState = {
    count: 0,
}
```
```
//	reducers/index.js

import { combineReducers } from 'redux'
import counter from './counter'

const reducers = combineReducers({
    counter
})

export default reducers
```
## 编写容器组件
```
//	containers/app.js

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
```
## 编写展示组件
```
//	pages/counter.js

import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.countAdd = this.countAdd.bind(this)
        this.countSub = this.countSub.bind(this)
    }
    countAdd(){
        this.props.countAdd();
    }
    countSub(){
        this.props.countSub();
    }
    render() {
        return(
            <div style={{
                textAlign:'center'
            }}>
                <button onClick={this.countSub}>减一</button>
                <span style={{
                    display:'inline-block',
                    width:'50px',
                    textAlign:'center'
                }}>
                    {this.props.count}
                </span>
                <button onClick={this.countAdd}>加一</button>
            </div>
        )
    }
}
export default Counter
```
## 编写入口文件
```
//	src/inde.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/app";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducers'

const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
```
## 运行项目
```
npm start
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200104164703748.gif)