import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '~/Redux/CounterSlice';
import type { RootState } from '~/Redux/store';

export function Counter() {
  const count = useSelector((s: RootState) => s.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>–</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
