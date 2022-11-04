import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fullpage from './pages/Fullpage';
function App() {
  return (
   <>
   <BrowserRouter>
   
   <Routes>



        <Route path='/' element={<Fullpage/>}/>





   </Routes>
   
   
   
   
   
   
   
   
   
   </BrowserRouter>
   
   </>
  );
}

export default App;
