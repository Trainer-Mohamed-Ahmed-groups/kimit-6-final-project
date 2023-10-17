import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
export default function CategoriesSelect({ filteredDataFn }) {
    const { t } = useTranslation();


    const [categories, setCategories] = useState([])

    let getCategories = () => {
        fetch("http://localhost:2222/categories")
            .then(json => json.json())
            .then(res => setCategories(res))
    }



    useEffect(() => {
        getCategories()
    }, [])
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="mb-4">{t('categories')}</Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    categories.map(cat =>
                        <Dropdown.Item key={Math.random()} onClick={() => filteredDataFn(cat)}>{cat}</Dropdown.Item>
                    )
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}
