import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PostList from './pages/PostList';
import Post from './pages/Post';
import Registration from './pages/Registration';
import Login from './pages/Login';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/posts',
    element: <PostList />
  },
   {
    path: '/post',
    element: <Post />
  },
  {
    path: '/registration',
    element: <Registration />
  }
  ,
  {
    path: '/login',
    element: <Login />
  }
]);



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
