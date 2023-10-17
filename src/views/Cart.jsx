import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DECREMENT, INCREMENT } from "../redux/actions/types"
import { Container, Row, Spinner } from "react-bootstrap";
import SingleProduct from "../components/SingleProduct";
import { useTranslation } from "react-i18next"

export default function Cart() {

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

    const [products, setProducts] = useState([])
    const [isEmpty, setIsEmpty] = useState(false)


    let getProducts = () => {
        fetch("http://localhost:3333/cart")
            .then(json => json.json())
            .then(res => setProducts(res))
            .then(() => products.length === 0 && setIsEmpty(true))
    }

    useEffect(() => {
        getProducts()
    }, [])

    const { t } = useTranslation();

    return (
        <div className="m-3 text-center">
            {/* <h2>ReduxExample</h2>
            <Button variant="primary" className="m-2" onClick={handleIncrease}>+</Button>
            {countState}
            <Button variant="danger" className="m-2" onClick={handleDecrease}>-</Button> */}

            <h1 className="m-4">{t('products')}</h1>

            <Container fluid>
                <Row>
                    {
                        products.length > 0
                            ?
                            <>
                                <h2>{t('nOfProducts')} : {products.length}</h2>
                                {products.map(product =>
                                    <SingleProduct product={product} key={product.id} inCart={true} getProducts={getProducts} />
                                )}
                            </>
                            :
                            isEmpty
                                ? <h2>Cart is empty</h2>
                                : <div className="d-flex justify-content-center"><Spinner animation="border" /></div>
                    }
                </Row>
            </Container>
        </div>
    )
}
