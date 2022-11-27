import './App.css';
import Ball from './redux/Ball'
import Bat from './redux/Bat'
import store from './store.js'
// import Bat from './components/Bat';
import { Provider } from 'react-redux';
import BatuseReducer from './components/BatuseReducer';
function App() {
  return (
    <>
      {/* <BatuseReducer></BatuseReducer>  */}
      <Provider store={store}>
        {/* <Ball></Ball> */}
        <Bat></Bat>
      </Provider>
    </>
  );
}

export default App;
