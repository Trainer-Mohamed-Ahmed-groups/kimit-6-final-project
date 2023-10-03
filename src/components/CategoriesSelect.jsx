import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
export default function CategoriesSelect() {
    const { t } = useTranslation();


    const [categories, setCategories] = useState([])

    let getCategories = () => {
        fetch("https://dummyjson.com/products/categories")
            .then(json => json.json())
            .then(res => setCategories(res))
    }

    useEffect(() => {
        getCategories()
    }, [])
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">{t('categories')}</Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    categories.map(cat =>
                        <Dropdown.Item href="#/action-1" key={Math.random()}>{cat}</Dropdown.Item>
                    )
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}