import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main';
import Home from './Component/Home';
import Statistics from './Component/Statistics';
import Blog from './Component/Blog';
import AppliedJobs from './Component/AppliedJobs';
import CardsCategory from './Component/CardsCategory';
import CompanyDetails from './Component/CompanyDetails';
import ErrorPage from './Component/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element: <Home></Home>,
        loader : () => fetch("company.json")
      },
      {
        path:"company/:companyId",
        element: <CompanyDetails></CompanyDetails>,
        loader : async ({params}) => {
          const res = await fetch("/company.json");
          const  data = await res.json();
          const company = data.find(job => job.id == params.companyId);
          return company;
        },
        
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>,
        loader : () => fetch("assigment.json")
      },
      {
        path:"/applied_job",
        element: <AppliedJobs></AppliedJobs>,
        loader : () => fetch("company.json")
      },
      {
        path:"/applied_job",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:"/blog",
        element: <Blog></Blog>
      }
    ]
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
