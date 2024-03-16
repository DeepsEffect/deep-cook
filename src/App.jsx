/* eslint-disable no-unused-vars */
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Header ></Header>
      <main className="container lg:px-24 mx-auto font-lexend">
        <Banner></Banner>
        <Cards></Cards>
      </main>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
