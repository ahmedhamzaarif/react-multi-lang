import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        contactUs: 'Contact Us',
        login: 'Login',
        logout: 'Log Out',
        profile: 'Profile',
        changeLanguage: 'Change Language',
      },
    },
    ar: {
      translation: {
        contactUs: 'اتصل بنا',
        login: 'تسجيل الدخول',
        logout: 'تسجيل خروج',
        profile: 'حساب تعريفي',
        changeLanguage: 'لغة جيدة',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;