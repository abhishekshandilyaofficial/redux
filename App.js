import './App.css';
import Ball from './redux/Ball'
import Bat from './redux/Bat'
import store from './store.js'
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <Ball></Ball>
        <Bat></Bat>
      </Provider>
    </>
  );
}

export default App;
