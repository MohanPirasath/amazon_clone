import './App.css';
import Header from './components/header/Header';
import Home from './components/homepage/Home';
import { Routes, Route, Link } from "react-router-dom";
import Checkout from './components/CHECKOUT/Checkout';
import Login from './components/login/Login';
import Payment from './components/CHECKOUT/payment/Payment';


function App() {
  return (

    <div className="App">
       <Routes>
        <Route path="/home" element={[
       <Header />,
       <Home/>
        ]

        } />
        <Route path="/" element={<Login/>}/>
        <Route path="/checkout" element={[
       <Header />,
       <Checkout/>
        ]

        } />
        <Route path="/checkout/payment" element={[
       <Header />,<Payment/>
        ]

        } />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}






export default App;
