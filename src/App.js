import logo from './logo.svg';
import './App.css';
import React, { useState, createContext, useContext } from 'react';
import LanguageSwitcher from './components/languageSwitcher';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';

const ThemeContext = createContext();

function ThemeDisplay() {
  const theme = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState(theme)
  const { i18n } = useTranslation();
  
  const toggleTheme = () => {
    if(currentTheme==='dark') { setCurrentTheme('light') } else { setCurrentTheme('dark') }
  }

  return (
    <div className='container'>
      
      <div className='context-ex'>
        <div>Current theme: {currentTheme}</div>
        <button onClick={toggleTheme}>Toggle</button>
      </div>

      
    </div>
  );
}

function App() {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeContext.Provider value="dark">
        <ThemeDisplay />
        <hr className='divider' />

        <div className='language-switcher'>
          <h5>{t('title')}</h5>
          <p>{t('content')}</p>
          <LanguageSwitcher />
        </div>
        <hr className="divider" />
        
      </ThemeContext.Provider>
    </I18nextProvider>
  );
}

export default App;
