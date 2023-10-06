import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next"

export default function ProductDetails() {

    let [product, setProduct] = useState(null)

    let params = useParams();
    const { t } = useTranslation();

    let getProduct = () => {
        fetch(`http://localhost:2222/products/${params.productId}`)
            .then(json => json.json())
            .then(res => setProduct(res))
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="m-4 text-center">
            {product ?
                <>
                    <h1 className="text-primary">{product.title}</h1>
                    <div className="d-flex align-items-center">
                        <img src={product.thumbnail} alt={product.title} className="w-50" />
                        <div className="fw-bold">
                            <p>{product.description}</p>
                            <div>{t('brand_name')} : {product.brand}</div>
                            <div>{t('price')}: {product.price} $</div>
                        </div>
                    </div>
                </>
                :
                <Spinner animation="border" />
            }
        </div>
    )
}