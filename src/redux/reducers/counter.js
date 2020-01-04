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