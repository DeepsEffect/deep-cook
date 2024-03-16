import "./App.css";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="container lg:px-24 mx-auto font-lexend">
      <Header></Header>
      <main>
        <Banner></Banner>
        <Cards></Cards>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
