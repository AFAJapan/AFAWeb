import React, {useState, useEffect} from 'react';
import Routing from './Routing/Routing';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const updateWindowDimensions = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  
  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener('resize', updateWindowDimensions);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  return (
    <div className="App">
      <Header isMobile={isMobile} />
      <Routing isMobile={isMobile}/>
      <Footer  isMobile={isMobile}/>
    </div>
  );
}

export default App;
