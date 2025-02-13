import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";


function Example() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Contaggio: {count}</p>
            <button onClick={() => dispatch(increment())}>
                incrementa +
            </button>
            <button onClick={() => dispatch(decrement())}>
                decrementa -
            </button>
        </div>
    );

}

export default Example;