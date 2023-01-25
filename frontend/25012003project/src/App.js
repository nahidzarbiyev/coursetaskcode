import './App.scss';
import Footer from './layouts/footer';
import Header from './layouts/header';
import Home from './pages/home';
import Routing from './routes';

function App() {
  return (
   <>
<Header/>
<Routing/>
<Footer/>
   </>
  );
}

export default App;
