import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ExploreScreen from './screens/exploreScreen/exploreScreen';
import HomeScreen from './screens/homeScreen/homeScreen';
import bgImage from './images/bgImage.jpg'

const App=()=> {
  return (
    <div className="App" style={{backgroundImage:`url(${bgImage})`}}>
      <div>
        <Header />
      </div>
      <Routes>
        <Route exact path="/explore" element={<ExploreScreen/>} />
        <Route exact path="/" element={<HomeScreen/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
