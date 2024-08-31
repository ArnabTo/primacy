import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PersonalTraining from './component/sub-routes/PersonalTraining.jsx'
import Home from './component/Home.jsx'
import PhysicalAssessments from './component/sub-routes/PhysicalAssessments.jsx'
import NutritionalGuidance from './component/sub-routes/NutritionalGuidance.jsx'
import BlogPost from './component/Blogs/BlogPost.jsx'
import AllBlogs from './component/Blogs/AllBlogs.jsx'
import Testimonies from './component/Testimonies.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/personal-training',
        element: <PersonalTraining/>,
      },
      {
        path: '/physical-assessments',
        element: <PhysicalAssessments/>,
      },
      {
        path: '/nutritional-guidance',
        element: <NutritionalGuidance/>,
      },
      {
        path: '/blogs',
        element: <AllBlogs/>,
      },
      {
        path: '/blogs/:slug',
        element: <BlogPost />,
      },
      {
        path: '/testimonials',
        element: <Testimonies/>,
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)