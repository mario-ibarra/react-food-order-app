import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import  Login  from './pages/login/Login';

function App(props) {

  return (
    <div >
      <Fragment>
      <Layout >
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        </Routes>
      </Layout>
    </Fragment>
    </div>

  );
}

export default App;
