import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className='change-lang-ex'>
        <p></p>
        <select onChange={changeLanguage}>
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>
  );
};

export default LanguageSwitcher;
