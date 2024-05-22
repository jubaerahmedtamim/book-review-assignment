import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './Components/Home/Home'
import BookDetails from './Components/BookDetails/BookDetails'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import ListedBooks from './Components/ListedBooks/ListedBooks'
import { Toaster } from 'react-hot-toast';
import ReadBookContent from './Components/ReadBookContent/ReadBookContent'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/', 
        element: <Home></Home>,
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('books.json')
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBookContent></ReadBookContent>,
            loader:()=> fetch('books.json'),
          },
          {
            path: 'wish-list',
            element: <h2>wish list books </h2>
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
  </React.StrictMode>,
)
