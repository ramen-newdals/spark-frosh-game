import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import all your components here to easily 
//reuse your components anywhere in the project

//components
import ContactInfo from './components/ContactInfo';
import FishPreviewSliders from './components/FishPreviewSliders';
import FishTankLink from "./components/FishTankLink";
import FishResult from './components/FishResult';
import Footer from "./components/Footer";
import FroshGroupDropdown from './components/FroshGroupDropdown';
import Header from "./components/Header";
import HowToPlay from './components/HowToPlay';
import Image from "./components/Image";
import NameField from "./components/NameField";
import PlayAgainButton from './components/PlayAgainButton';
import StoryChoice from "./components/StoryChoice";
import StoryPrompt from "./components/StoryPrompt";
import StartButton from "./components/StartButton";
import Subscribe from './components/Subscribe';
import progressBar from './components/progressBar';

//pages
import EndingPage from "./pages/EndingPage";
import LandingPage from "./pages/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import StoryPage from "./pages/StoryPage";

//data types
import StoryFrame from "./backend/StoryFrame";

//images
import brokenImage from "./images/broken-image.png";
import sparkLogoSmall from "./images/SparkLogoSmall.png";
import sparkLogoBlackText from "./images/SparkLogoBlackText.png";
import shark from "./images/demoShark.png";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export {
  EndingPage,
  LandingPage,
  PageNotFound,
  StoryPage,
  ContactInfo,
  FishPreviewSliders,
  FishTankLink,
  FishResult,
  Footer,
  FroshGroupDropdown,
  Header,
  HowToPlay,
  Image,
  NameField,
  PlayAgainButton,
  StartButton,
  StoryChoice,
  StoryPrompt,
  Subscribe,
  StoryFrame,
  brokenImage,
  shark,
  sparkLogoSmall,
  sparkLogoBlackText,
  progressBar
};

