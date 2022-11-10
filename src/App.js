import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Route/Routes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div  >
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div >
  );
}

export default App;
