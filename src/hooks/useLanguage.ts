
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const useLanguage = () => {
  const { t, i18n } = useTranslation();

  
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('selectedLanguage', language); 
  };

  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage); 
    }
  }, [i18n]);

  return {
    t, 
    currentLanguage: i18n.language, 
    changeLanguage, 
  };
};