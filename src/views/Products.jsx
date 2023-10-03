import { useEffect, useState } from "react";
import { Container, Row, Spinner, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next"
import SingleProduct from "../components/SingleProduct";
import CategoriesSelect from "../components/CategoriesSelect";

export default function Products() {
    const { t } = useTranslation();
    const [products, setProducts] = useState([])

    let getProducts = () => {
        fetch("https://dummyjson.com/products")
            .then(json => json.json())
            .then(res => setProducts(res.products))
    }



    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="text-center">
            <h1 className="m-4">{t('products')}</h1>
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
