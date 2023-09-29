import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next";

export default function About() {
    const countState = useSelector((state) => state.count)
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('about')}</h2>
            {countState}
        </div>
    )
}
