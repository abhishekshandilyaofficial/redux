import './App.css';
import Ball from './redux/Ball'
import Bat from './redux/Bat'
import store from './store.js'
import { Provider } from 'react-redux';
import User from './redux/User';

function App() {
  return (
    <>
      <Provider store={store}>
        <Ball></Ball>
        <Bat></Bat>
        <User></User>
      </Provider>
    </>
  );
}

export default App;
