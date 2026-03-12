import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</codeimport React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube, FaPatreon, FaEnvelope } from 'react-icons/fa';
import './App.css';

function App() {
  const [lang, setLang] = useState('en');

  const translations = {
    fr: {
      mission: "Notre Mission",
      missionText1: "Construire des communautés authentiques à l'ère numérique.",
      missionText2: "Comme les premiers cafés du 18ème siècle à Londres, DUMY crée des espaces de connexion réelle, de partage et d'idées.",
      about: "À propos",
      aboutText: "Je m'appelle Makar Karma. J'ai commencé ce projet à 17 ans en 2017, quand j'ai fait du stop au Danemark pour comprendre pourquoi ils sont 'les plus heureux du monde'. La réponse est dans la construction de communauté, ces valeurs socialo-capitalistes d'éducation gratuite, santé pour tous... Mais surtout - LA COMMUNAUTÉ.",
      philosophy: "Ma philosophie",
      philosophyText: "J'ai commencé le blog DUMY à 17 ans et je sens que ça fait partie de moi. La vision est grande, mais ce n'est pas une entreprise. C'est une question de valeurs. Ça l'a toujours été et ça le sera toujours. Peu importe si DUMY devient un grand ou petit projet. Ce sera toujours le projet de ma vie.",
      data: "Nos Données",
      dataText: "Explorez les données que nous collectons pour comprendre et améliorer les communautés.",
      viewData: "Voir les données sur datadum",
      contact: "Contact",
      email: "Email",
      follow: "Suivez-nous",
      copyright: "© 2026 DUMY - Le projet d'une vie"
    },
    en: {
      mission: "Our Mission",
      missionText1: "Building authentic communities in the digital age.",
      missionText2: "Like the first coffee shops in 18th century London, DUMY creates spaces for real connection, sharing, and ideas.",
      about: "About",
      aboutText: "I am Makar Karma. I started this project at 17 in 2017, when I hitchhiked in Denmark to understand why they are 'the happiest'. The answer is in building community, those socialist-capitalistic values of free education, healthcare for all... But most importantly - COMMUNITY.",
      philosophy: "My Philosophy",
      philosophyText: "I started the DUMY blog at 17 and it totally feels like it's part of me. The vision is grand, but it's not about business. It's about values. Always been and always will be. No matter if DUMY becomes a big or small project. It will always be the project of my life.",
      data: "Our Data",
      dataText: "Explore the data we collect to understand and improve communities.",
      viewData: "View data on datadum",
      contact: "Contact",
      email: "Email",
      follow: "Follow us",
      copyright: "© 2026 DUMY - A life project"
    },
    ua: {
      mission: "Наша місія",
      missionText1: "Створення автентичних спільнот у цифрову епоху.",
      missionText2: "Як перші кав'ярні у Лондоні 18 століття, DUMY створює простори для реального зв'язку, обміну та ідей.",
      about: "Про нас",
      aboutText: "Я Макар Карма. Я почав цей проєкт у 17 років у 2017, коли подорожував автостопом у Данії, щоб зрозуміти, чому вони 'найщасливіші'. Відповідь у побудові спільноти, цих соціалістично-капіталістичних цінностях безкоштовної освіти, медицини для всіх... Але найголовніше - СПІЛЬНОТА.",
      philosophy: "Моя філософія",
      philosophyText: "Я почав блог DUMY у 17 і відчуваю, що це частина мене. Бачення грандіозне, але це не про бізнес. Це про цінності. Так було завжди і так буде завжди. Неважливо, чи стане DUMY великим чи малим проєктом. Це завжди буде проєктом мого життя.",
      data: "Наші дані",
      dataText: "Досліджуйте дані, які ми збираємо, щоб розуміти та покращувати спільноти.",
      viewData: "Переглянути дані на datadum",
      contact: "Контакти",
      email: "Email",
      follow: "Слідкуйте за нами",
      copyright: "© 2026 DUMY - Проєкт життя"
    }
  };

  const t = translations[lang];

  return (
    <div className="app">
      {/* Language Selector */}
      <div className="language-selector">
        <button onClick={() => setLang('fr')} className={lang === 'fr' ? 'active' : ''}>FR</button>
        <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
        <button onClick={() => setLang('ua')} className={lang === 'ua' ? 'active' : ''}>UA</button>
      </div>

      {/* Main Content */}
      <main className="container">
        <h1 className="title">DUMY</h1>
        <p className="subtitle">Building communities since 2017</p>

        {/* Mission Section */}
        <section className="section">
          <h2>{t.mission}</h2>
          <p>{t.missionText1}</p>
          <p>{t.missionText2}</p>
        </section>

        {/* About Section */}
        <section className="section">
          <h2>{t.about}</h2>
          <p>{t.aboutText}</p>
        </section>

        {/* Philosophy Section */}
        <section className="section philosophy">
          <h2>{t.philosophy}</h2>
          <p>{t.philosophyText}</p>
        </section>

        {/* Data Section */}
        <section className="section data-section">
          <h2>{t.data}</h2>
          <p>{t.dataText}</p>
          <a 
            href="https://datadum.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="data-link"
          >
            {t.viewData} →
          </a>
        </section>

        {/* Social Links */}
        <section className="section social-section">
          <h2>{t.follow}</h2>
          <div className="social-links">
            <a href="https://facebook.com/dumy" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> Facebook
            </a>
            <a href="https://instagram.com/dumy" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://telegram.org/dumy" target="_blank" rel="noopener noreferrer">
              <FaTelegram /> Telegram
            </a>
            <a href="https://youtube.com/@dumy" target="_blank" rel="noopener noreferrer">
              <FaYoutube /> YouTube
            </a>
            <a href="https://patreon.com/dumy" target="_blank" rel="noopener noreferrer">
              <FaPatreon /> Patreon
            </a>
            <a href="mailto:contact@dumy.org">
              <FaEnvelope /> {t.email}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>{t.copyright}</p>
      </footer>
    </div>
  );
}

export default App;> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
