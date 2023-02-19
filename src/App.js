import React, { useReducer } from 'react';
import './App.css';
// import CA from './lib/components/cA';
// import CB from './lib/components/cB';
// import CD from './lib/components/cD';

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case '+':
//       return state + 1;
//     case '-':
//       return state - 1;
//     case 'reset':
//       return initialState;
//     default:
//       return state;
//   }
// }
// export const counterContext = React.createContext()

function App() {
  // const [counter, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      {/* count is : {counter}
      <counterContext.Provider value={{countState:counter, countDispatch:dispatch}}>
        <CA />
        <CB />
        <CD />
      </counterContext.Provider> */}
    </div>
  );
}

export default App;
