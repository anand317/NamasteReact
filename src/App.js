 import React from 'react'
 import ReactDOM from 'react-dom/client'
 
 import Header from './components/Header';
 import Body from './components/Body';
 import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
 import About from './components/About';
 import ContactUs from './components/ContactUs';
 import Error from './components/Error';
 import Cart from './components/Cart';
 import RestrorentDetails from './components/RestrorentDetails';
 import { Provider } from 'react-redux';
 import appStore from './utils/appStore';
 import inputBox from './components/InputBox';


 const AppLayout = () =>{
    return (
      <Provider store={appStore}>
          <div className='applayout'>
           <Header/>
           <Outlet/>
        </div>
      </Provider>
       
    )
    
 }

 const appRouter=createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      children:[
         {
            path:"/",
            element:<Body/>
         },
         {
            path:"/about",
            element:<inputBox/>
         },
         {
            path:"/contactus",
            element:<ContactUs/>
         },
         {
            path:"/cart",
            element:<Cart/>
         },

         {
            path:"/restrorent/:resId",
            element:<RestrorentDetails/>
         }
      ]
   }
   
 ])
 
 const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
