import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoListInput from './components/TodoListInput.js';
import TodoListOutput from './components/TodoListOutput.js';

function App() {
  return (
    <>
      <Provider store={store}>
        <TodoListInput />
        <TodoListOutput />
      </Provider>
    </>
  );
}

export default App;
