import { Button } from "react-bootstrap"
// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DECREMENT, INCREMENT } from "../redux/actions/types"

export default function ReduxExample() {

    // const [count, setCount] = useState(0)
    const countState = useSelector((state) => state.count)
    const dispatch = useDispatch()

    
    let handleIncrease = () => {
        // setCount(count + 1)
        dispatch({
            type: INCREMENT
        })
    }
    let handleDecrease = () => {
        // setCount(count - 1)
        dispatch({
            type: DECREMENT
        })
    }

    return (
        <div className="m-3 text-center">
            <h2>ReduxExample</h2>
            <Button variant="primary" className="m-2" onClick={handleIncrease}>+</Button>
            {countState}
            <Button variant="danger" className="m-2" onClick={handleDecrease}>-</Button>
        </div>
    )
}
