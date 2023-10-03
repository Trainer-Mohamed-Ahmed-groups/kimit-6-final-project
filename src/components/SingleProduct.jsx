import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"


export default function SingleProduct({ product }) {
    const { t } = useTranslation();
    return (
        <Col className="p-2" lg="3" md="6" sm="12">
            <Card className="h-100">
                <Card.Img className="h-50" variant="top" src={product.thumbnail} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.brand}</Card.Text>
                    <Link to={`./${product.id}`} className="btn btn-primary">{t('view_product_details')}</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}
