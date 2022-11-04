import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fullpage from './pages/Fullpage';
import Fullpage1 from './pages/Fullpage1';
import Fullpage2 from './pages/Fullpage2';
import Fullpage3 from './pages/Fullpage3';
import Fullpage4 from './pages/Fullpage4';
import Fullpage5 from './pages/Fullpage5';

function App() {
  
  return (
<>
<BrowserRouter>

<Routes>

<Route path='/' element={<Fullpage/>}/>
<Route path='/shop' element={<Fullpage1/>}/>
<Route path='/details/:id/' element={<Fullpage2/>}/>
<Route path='/details' element={<Fullpage2/>}/>
<Route path='/cart' element={<Fullpage3/>}/>
<Route path='/checkout' element={<Fullpage4/>}/>
<Route path='/contact' element={<Fullpage5/>}/>
</Routes>

 
 

</BrowserRouter>



</>
  );
}

export default App;
