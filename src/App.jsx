import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './css/App.css'
import About from './components/About'
import Title from './components/Title'

const App = () => {
  return (
    <div id='main'>
      <Title />
      <About />
    </div>
  );
};

export default App