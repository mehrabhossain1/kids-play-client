import "./App.css";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <>
      {/* <Login></Login> */}
      <Register></Register>
      <Navbar></Navbar>
      <Footer></Footer>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
