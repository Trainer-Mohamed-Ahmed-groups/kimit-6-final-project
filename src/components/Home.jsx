import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();
    return (
        <div>
            <h2>{t('home')}</h2>
            <div>{t('welcome')}</div>
        </div>
    )
}
