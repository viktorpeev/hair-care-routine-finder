import { Route, Routes } from 'react-router-dom';
import './App.css';

//pages
import { Homepage } from './Pages/Homepage';
import { Result } from './Pages/Result';
import { Q1 } from './Pages/Q1';
import { Q2 } from './Pages/Q2';
import { Q3 } from './Pages/Q3';
import { Q4 } from './Pages/Q4';
import { Q5 } from './Pages/Q5';

function App() {
  return (
    <div className='main'>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/result' element={<Result />} />
        <Route path='/question-1' element={<Q1 />} />
        <Route path='/question-2' element={<Q2 />} />
        <Route path='/question-3' element={<Q3 />} />
        <Route path='/question-4' element={<Q4 />} />
        <Route path='/question-5' element={<Q5 />} />
        <Route element={<Homepage />} /> {/* Default route */}
      </Routes>
    </div>
  );
}

export default App;
