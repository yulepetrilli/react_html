import React, { useState, useEffect} from 'react';
import './styles/global.css';
import Header from './Components/Header.js'
import TopCardsL from './Components/TopCardsL.js'
import Overview from './Components/overview.js';
import Switch from './Components/switch';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked ] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'
  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }
  useEffect(()=>{
    const mq = window.matchMedia('prefers-color-scheme:dark')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }, [])
  
  return (
    <main className = {mainClass}>
      <Header>
        <Switch 
        setDarkMode = {setDarkMode} 
        checked = {checked}
        setChecked = {setChecked}
        />
      </Header>
      <TopCardsL/>
      <Overview/>
    </main>
  );
}

export default App;
