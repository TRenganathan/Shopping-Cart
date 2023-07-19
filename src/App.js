import './App.css';
import Cart from './Components/Cart';
import Dashboard from './Components/Dashboard';
// import Product from './Components/Product';
import 'bootstrap/dist/css/bootstrap.min.css'
import RootLayout from './Components/RootLayout';
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route, BrowserRouter, Routes } from 'react-router-dom';
// import NavBarPanel from './Components/NavBarPanel';
// import { Provider } from 'react-redux';
// import store from './Store/Store';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>

  ))


  //  /* <RouterProvider router={router}/> */
  return (
    <div className="App">
      <RouterProvider router={router}/>
      {/* <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Dashboard/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider> */}
   

    </div>
  );
}

export default App;
