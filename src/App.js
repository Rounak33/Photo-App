import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavbarComponent from './Component/NavbarComponent'
import Photos from './Component/Photos'
import About from './Component/About'
import Contact from './Component/Contact'
import Photo from './Component/Photo'


function App() {

  return (
    <BrowserRouter>
      <NavbarComponent />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/photos/:id">
          <Photo />
        </Route>
      </Switch>
    </ BrowserRouter>
  );
}

export default App;