
import './App.css';
import Home from './components/Home';
import Admin from './components/Admin';
import { Routes, Route} from "react-router-dom";
import Test from './components/Test';


function App() {

  return (
    <div className='bg-gray-900 text-white mx-auto w-full h-full min-h-screen font-[poppins]'>
      <Routes>
        <Route path='/' exact element={ <Home/>} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
