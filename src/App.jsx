import React, { useEffect, useState } from 'react';
import { fetchWelcome } from './api';

const App = () => {
  const [welcomeText, setWelcomeText] = useState('');

  useEffect(() => {
    const getData = async () => {
      const data = await fetchWelcome();
      if (data) {
        setWelcomeText(data.message || 'Ответ получен!');
      }
    };
    getData();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Добро пожаловать в Объявку!</h1>
      <p>Frontend подключён. Скоро здесь появятся объявления.</p>
      <p style={{ color: 'gray' }}>{welcomeText}</p>
    </div>
  );
};

export default App;
