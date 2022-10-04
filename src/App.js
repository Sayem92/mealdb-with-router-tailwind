
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Routes/Routes';

function App() {
  return (
    <div className=' relative'>
    
    <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
