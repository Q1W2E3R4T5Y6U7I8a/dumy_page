import React, { useState } from 'react';
import { FaInstagram, FaTelegram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import './App.css';

function App() {
  const [lang, setLang] = useState('en');

  const translations = {
    fr: {
      about: "À propos",
      aboutText: "Hi, I am Maks! A 24 y.o. Ukrainian living in Switzerland, studying Data Science at UniNE.\n\nI started the DUMY project at 17, back in 2017. Writing my thoughts and building applications to better understand the world. If you have any feedback, I'd be glad if you reached out on Instagram or Telegram (@makarkarma) to chat, maybe grab a coffee and talk a little 🙃",
      data: "DataDUM",
      dataText: "A map with visual representation of GDP/population/WW2 statistics to better understand the world.",
      viewData: "VISIT THE WEBSITE",
      apd: "APD | Analytic Personal Dashboard",
      apdDesc: "APD helps you structure your life through analytics - track dreams, goals, habits, and finances to build a solid foundation.",
      bookcrossingText: "A book sharing project across Ukraine. Join our community of readers and exchange books throughout the country.",
      visitBookcrossing: "VISIT BOOKCROSSING",
      subscribers: "Subscribers",
    },
    en: {
      about: "About",
      aboutText: "Hi, I am Maks! A 24 y.o. Ukrainian living in Switzerland, studying Data Science at UniNE.\n\nI started the DUMY project at 17, back in 2017. Writing my thoughts and building applications to better understand the world. If you have any feedback, I'd be glad if you reached out on Instagram or Telegram (@makarkarma) to chat, maybe grab a coffee and talk a little 🙃",
      data: "DataDUM",
      dataText: "A map with visual representation of GDP/population/WW2 statistics to better understand the world.",
      viewData: "VISIT THE WEBSITE",
      apd: "APD | Analytic Personal Dashboard",
      apdDesc: "APD helps you structure your life through analytics - track dreams, goals, habits, and finances to build a solid foundation.",
      bookcrossingText: "A book sharing project across Ukraine. Join our community of readers and exchange books throughout the country.",
      visitBookcrossing: "VISIT BOOKCROSSING",
      subscribers: "Subscribers",
    },
    ua: {
      about: "Про мене",
      aboutText: "Привіт, я Макс! 24-річний українець, який живе у Швейцарії та вивчає Data Science в UniNE.\n\nЯ розпочав проєкт DUMY у 17 років, у 2017. Пишу свої думки та створюю застосунки, щоб краще зрозуміти світ. Якщо маєте будь-який зворотний зв'язок, буду радий, якщо напишете мені в Instagram або Telegram (@makarkarma), щоб поспілкуватися, можливо, випити каву та трохи поговорити 🙃",
      data: "DataDUM",
      dataText: "Мапа з візуальним представленням статистики ВВП/населення/Другої світової війни для кращого розуміння світу.",
      viewData: "ВІДВІДАТИ САЙТ",
      apd: "APD | Аналіз Проведеної Дії",
      apdDesc: "APD допомагає структурувати життя через аналітику - відстежуйте мрії, цілі, звички та фінанси для створення міцного фундаменту.",
      bookcrossingText: "Проєкт обміну книгами по всій Україні. Приєднуйтесь до нашої спільноти читачів та обмінюйтесь книгами по всій країні.",
      visitBookcrossing: "ВІДВІДАТИ BOOKCROSSING",
      subscribers: "Підписників",
    }
  };

  const t = translations[lang];

  // Subscriber counts with links
  const socialLinks = [
    { name: "Instagram", handle: "@dumyUA", url: "https://instagram.com/dumyUA", count: "≈30k", icon: "📸" },
    { name: "Telegram", handle: "@dumyUA", url: "https://t.me/dumyUA", count: "≈2k", icon: "💬" },
    { name: "YouTube", handle: "@dumyUA", url: "https://www.youtube.com/@dumyUA", count: "≈200", icon: "🎬" }
  ];

  const totalSubscribers = 32220;

  return (
    <div className="app">
      {/* Language Selector - Fixed bottom right with flags */}
      <div className="language-selector-fixed">
        <img 
          src={`${process.env.PUBLIC_URL}/en.png`} 
          alt="English" 
          className={`lang-flag ${lang === 'en' ? 'active' : ''}`}
          onClick={() => setLang('en')}
        />
        <img 
          src={`${process.env.PUBLIC_URL}/ua.png`} 
          alt="Ukrainian" 
          className={`lang-flag ${lang === 'ua' ? 'active' : ''}`}
          onClick={() => setLang('ua')}
        />
        <img 
          src={`${process.env.PUBLIC_URL}/fr.png`} 
          alt="French" 
          className={`lang-flag ${lang === 'fr' ? 'active' : ''}`}
          onClick={() => setLang('fr')}
        />
      </div>

      {/* Main Content */}
      <main className="container">
        <h1 className="title">DUMY</h1>

        {/* Statistics Card - With links next to counts */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">{totalSubscribers.toLocaleString()}</div>
            <div className="stat-label">{t.subscribers}</div>
            <div className="subscriber-breakdown">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="subscriber-link">
                  <span className="subscriber-icon">{link.icon}</span>
                  <span className="subscriber-name">{link.name}:</span>
                  <span className="subscriber-count">{link.count}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Data Section - DataDUM Project (Green) */}
        <section className="section data-section">
          <h2>🗺 {t.data}</h2>
          <p>{t.dataText}</p>
          <div className="data-links">
            <a 
              href="https://q1w2e3r4t5y6u7i8a.github.io/data_science/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="data-link primary"
            >
              {t.viewData} →
            </a>
          </div>
        </section>

        {/* APD Project Section (Blue-ish) */}
        <section className="section apd-section">
          <h2>📊 {t.apd}</h2>
          <p className="apd-description">{t.apdDesc}</p>
          <div className="apd-link-container">
            <a 
              href="https://apd-tau.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="apd-link"
            >
              OPEN APD →
            </a>
          </div>
        </section>

        {/* Bookcrossing Project (Yellow/Gold) */}
        <section className="section bookcrossing-section">
          <h2>📚 Bookcrossing Ukraine</h2>
          <p>{t.bookcrossingText}</p>
          <a 
            href="https://dumy-ochre.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bookcrossing-link"
          >
            {t.visitBookcrossing} →
          </a>
        </section>

        {/* About Section - at the bottom */}
        <section className="section about-section">
          <h2>{t.about}</h2>
          {t.aboutText.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>DUMY</p>
      </footer>
    </div>
  );
}

export default App;