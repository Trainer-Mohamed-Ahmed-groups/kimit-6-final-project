import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"
import Swal from "sweetalert2";

export default function SingleProduct({ product, inCart, getProducts }) {
    const { t } = useTranslation();


    async function postData() {
        const response = await fetch("http://localhost:3333/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product)
        }).then(Swal.fire({
            icon: 'success',
            title: `${t('added')}`
        }))

        return response.json();
    }

    function removeData(id) {
        Swal.fire({
            icon: "question",
            title: "Are you sure",
            text: `${product.title}`,
            showCancelButton: true,
        }).then(data => {
            if (data.isConfirmed) {
                fetch("http://localhost:3333/cart/" + product.id, { method: "DELETE" })
                    .then(res => res.json())
                    .then(getProducts())
                    .then(Swal.fire({
                        icon: 'success',
                        title: 'Deleted successfully'
                    }))
            }
        })
    }


    return (
        <Col className="p-2" lg="3" md="6" sm="12">
            <Card className="h-100">
                <Card.Img className="h-50" variant="top" src={product.thumbnail} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.brand}</Card.Text>
                    <Link to={`/products/${product.id}`} className="btn btn-primary m-2">{t('view_product_details')}</Link>
                    {
                        inCart
                            ? <Button variant="danger" onClick={() => removeData(product)} className="m-2">{t('remove')}</Button>
                            : <Button variant="info" onClick={postData} className="m-2">{t('add_to_cart')}</Button>
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}
