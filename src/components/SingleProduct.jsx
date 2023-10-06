import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { INCREMENT } from "../redux/actions/types"


export default function SingleProduct({ product }) {
    const { t } = useTranslation();

    const dispatch = useDispatch()

    let handleIncrease = () => {
        // setCount(count + 1)
        dispatch({
            type: INCREMENT
        })
    }
    return (
        <Col className="p-2" lg="3" md="6" sm="12">
            <Card className="h-100">
                <Card.Img className="h-50" variant="top" src={product.thumbnail} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.brand}</Card.Text>
                    <Link to={`./${product.id}`} className="btn btn-primary m-2">{t('view_product_details')}</Link>
                    <Button variant="info" onClick={handleIncrease} className="m-2">{t('add_in_cart')}</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
