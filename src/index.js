import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnglishTranslation from "./locale/en.json";
import ArabicTranslation from "./locale/ar.json"
import ThemeProvider from './context/ThemeContext';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: EnglishTranslation
      },
      ar: {
        translation: ArabicTranslation
      }
    },
    lng: localStorage.getItem("language"),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
