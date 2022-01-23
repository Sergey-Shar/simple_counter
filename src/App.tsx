import { useAppSelector, useAppDispatch } from "./hooks";
import { selectCount, increment, decrement } from "./slice/counterSlice";
import "./App.css";

function App() {
  const number = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}> - </button>
      {number}
      <button onClick={() => dispatch(increment())}> + </button>
    </div>
  );
}

export default App;
