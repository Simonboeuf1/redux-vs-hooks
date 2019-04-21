export default loggerMiddleware = ({ getState }) => (next) => (action) => {
  console.log("current state", getState());
  console.log("dispatching action", action);
  const nextState = next(action);
  console.log("next state", nextState);
  return nextState;
};