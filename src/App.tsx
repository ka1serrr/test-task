import { Route, Routes } from 'react-router-dom';
import { Table } from './components/Table/Table';
import { NotFound } from './components/NotFound/NotFound';

const App = () => {
  return (
    <div className='pt-6 pb-3'>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Table />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
