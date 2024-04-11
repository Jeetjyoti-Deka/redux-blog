import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./redux/slices/counterSlice";
import { RootState } from "./redux/store";

const App = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-100 w-64 h-64 flex flex-col items-center p-4 rounded-lg border-2 border-slate-300">
        <h1 className="text-xl font-semibold">Count</h1>
        <p className="text-7xl font-semibold mt-3">{count}</p>
        <div className="mt-auto w-full flex items-center gap-x-4">
          <button className="btn" onClick={() => dispatch(increment())}>
            +
          </button>
          <button className="btn" onClick={() => dispatch(decrement())}>
            -
          </button>
        </div>
        <div className="mt-auto w-full flex items-center gap-x-4">
          <button
            className="btn"
            onClick={() => dispatch(incrementByAmount(10))}
          >
            +10
          </button>
          <button
            className="btn"
            onClick={() => dispatch(decrementByAmount(10))}
          >
            -10
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
