import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import all your components here to easily 
//reuse your components anywhere in the project
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/Image";
import StoryChoice from "./components/StoryChoice";
import StoryPrompt from "./components/StoryPrompt";

import EndingPage from "./pages/EndingPage";
import LandingPage from "./pages/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import StoryPage from "./pages/StoryPage";

import StoryFrame from "./backend/StoryFrame";

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
  Footer,
  Header,
  Image,
  StoryChoice,
  StoryPrompt,
  StoryFrame
};

