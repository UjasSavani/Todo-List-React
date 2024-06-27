import './App.css';
import './css/TodoList.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigations from './Navigation/Navigations.js';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navigations />
      </Provider>
    </>
  );
}

export default App;
