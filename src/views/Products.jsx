import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next"
import SingleProduct from "../components/SingleProduct";
import CategoriesSelect from "../components/CategoriesSelect";

export default function Products() {
    const { t } = useTranslation();
    const [products, setProducts] = useState([])

    let getProducts = () => {
        fetch("http://localhost:2222/products")
            .then(json => json.json())
            .then(res => setProducts(res))
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="text-center">
            <h1 className="m-4">{t('products')}</h1>
            <h2>{t('nOfProducts')} : {products.length}</h2>
            <Container fluid>
                <CategoriesSelect />
                <Row>
                    {
                        products.length > 0
                            ?
                            products.map(product =>
                                <SingleProduct product={product} key={product.id} />
                            )
                            :
                            <div className="d-flex justify-content-center"><Spinner animation="border" /></div>
                    }
                </Row>
            </Container>
        </div>
    )
}
