import Home from './containers/public/Home';
import Public from './containers/public/Public';
import Login from './containers/public/Login';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import path from './utils/path';

function App() {

  return (
    <>
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.HOME} element={<Home/>} />
          <Route path={path.LOGIN} element={<Login/>} /> 
          
        </Route>
      </Routes>
    </div>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    </>
  );
}

export default App;
