import './App.css';

import {IntlProvider, FormattedMessage} from "react-intl";
import { useState, useEffect } from 'react';


const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "{count} tane mesajınız var"
  },
  "en-US": {
    title: "Hello World",
    description: "You have {count} messages"
  }
}

function App() {
  
  const defaultLocale = navigator.language;
  const [locale, setLocale] = useState(localStorage.getItem("locale") || defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale",locale);
  }, [locale])

  return (
    <div className="App">
        <IntlProvider locale={locale} messages={messages[locale]}>
            <FormattedMessage id="title"/>
            <br/>
            <FormattedMessage id="description" values={{count: 10}}/>
            <br/>
            <br/>
            <button onClick={() => setLocale("tr-TR")}>TR</button>
            <button onClick={() => setLocale("en-US")}>EN</button>
        </IntlProvider>
    </div>
  );
}

export default App;
