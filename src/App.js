//Import Style
import './style/app.css';

//Import Components
import Nav from './components/nav';
import Hero from './components/hero';
import Category from './components/category';
import Footer from './components/footer';

function App() {

  const scrollHandler=()=>{
    let top = document.body.scrollTop;
  }
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Category  
    onScroll={scrollHandler}/>
      <Footer />
    </div>
  );
}

export default App;
