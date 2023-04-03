import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import Breaking from './components/Category/Breaking';
import RegukarNews from './components/Category/RegukarNews';
import InterNational from './components/Category/InterNational';
import Sports from './components/Category/Sports';
import FirstNews from './components/Category/FirstNews';
import NewsDetails from './components/Home/NewsDetails';
import Newslist from './components/Home/Newslist';
import Entertainment from './components/Category/Entertainment';
import Culture from './components/Category/Culture'
import Arts from './components/Category/Arts'



const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,


    children: [

      {

        path : "/",
        element : <FirstNews></FirstNews>,
        loader : () => fetch (`https://openapi.programming-hero.com/api/news/category/08`)
      }

      ,

      {


        path  : "/detail/:detail_id",
        element : <NewsDetails></NewsDetails>,
        loader : ({params}) => fetch (`https://openapi.programming-hero.com/api/news/${params.detail_id}`)

      },

      

      {
        path: "breaking",
        element: <Breaking></Breaking>,
        loader : () => fetch (`https://openapi.programming-hero.com/api/news/category/01`)
      },



      {
        path : "regular",
        element : <RegukarNews></RegukarNews>,
        loader : () => fetch (`https://openapi.programming-hero.com/api/news/category/02`)


      },

      {

        path : "International",
        element : <InterNational></InterNational>,
        loader : () => fetch (`https://openapi.programming-hero.com/api/news/category/03`)


      },

      {

        path : "sports",
        element : <Sports></Sports>,
        loader : () => fetch (`https://openapi.programming-hero.com/api/news/category/04`)

        
      },

      {


        path : "entertainment",
        element : <Entertainment></Entertainment>,
        loader : () => fetch (`https://openapi.programming-hero.com/api/news/category/05`)

      },


      {

        path : "culture",
        element : <Culture></Culture>,
        loader : () => fetch (`https://openapi.programming-hero.com/api/news/category/06`)


      },

      {

        path : "arts",
        element :<Arts></Arts>,
        loader : () => fetch (`https://openapi.programming-hero.com/api/news/category/07`)

      },
      
    ],
  },




]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
