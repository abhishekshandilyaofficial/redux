import './App.css';
import Ball from './redux/Ball'
import store from './store.js'
// import Bat from './components/Bat';
import { Provider } from 'react-redux';
// import BatuseReducer from './components/BatuseReducer';
function App() {
  return (
    <>
      {/* <Ball></Ball>
      <Bat></Bat>
      <BatuseReducer></BatuseReducer> */}
      <Provider store={store}>
        <Ball></Ball>
      </Provider>
    </>
  );
}

export default App;
