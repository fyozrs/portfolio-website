import './css/App.css'
import Title from './components/Title'
import AllCards from './components/AllCards';
import SocialLinks from './components/SocialLinks';
import Theme from './components/Theme'

const App = () => {
  return (
    <div id='main'>
      <Theme />
      <Title />
      <SocialLinks />
      <AllCards />
    </div>
  );
};

export default App