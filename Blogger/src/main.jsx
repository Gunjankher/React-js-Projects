import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import { AuthLayout, Login } from './components/index.js'


// pages 

import Home from './components/pages/Home.jsx'
import AddPost from './components/pages/AddPost.jsx'
import Signup from './components/pages/Signup.jsx'
import EditPost from './components/pages/EditPost.jsx'
import Post from './components/pages/Post.jsx'
import AllPosts from './components/pages/AllPost.jsx'


const router = createBrowserRouter([

{
  path :"/",
  element:<App />,
  children:[








  ]
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider store = {store}>
<RouterProvider router = {router} />
</Provider>
  </React.StrictMode>,
)
