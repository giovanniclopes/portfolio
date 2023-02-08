import { BrowserRouter as Router } from 'react-router-dom';
import { Router as AllRoutes } from './../Router';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AllRoutes />
    </Router>
  )
}

export default App
