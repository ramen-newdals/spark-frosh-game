import './App.css';

import {
  Header,
  Footer,
  StoryPage
} from "./index.js";

const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        <StoryPage/>
      </div>
      <Footer />
    </>
  );
}

export default App;
