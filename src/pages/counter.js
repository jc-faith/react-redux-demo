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