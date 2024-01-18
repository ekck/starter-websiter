import logo from './logo.svg';
import './App.css';

import { Footer, Blog, Possibility, Features, Zanah, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

function App() {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>    
    <Brand />
    <Zanah />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer/>

         </div>
  );
}

export default App;
