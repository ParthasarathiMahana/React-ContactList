import '../styles/App.css';
import Header from './Header';
import {ContactContextProvider} from '../ContactContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddForm from './AddForm';
import EditForm from './EditForm';

function App() {
  return (
    <ContactContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='addForm' element={<AddForm/>}/>
          <Route path='editForm/:id' element={<EditForm/>}></Route>
        </Routes>
      </Router>
    </ContactContextProvider>
  );
}

export default App;
