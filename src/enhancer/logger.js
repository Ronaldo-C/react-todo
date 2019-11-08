const logger = createStore => (...arg) => {
    const store = createStore(...arg);
    const dispatch = action => {
        console.group(action.type);
        console.log('dispatching:', action);
        const result = store.dispatch(action);
        console.log('next state:', store.getState());
        console.groupEnd();
        return result;
    }
    return { ...store, dispatch }
}

export default logger