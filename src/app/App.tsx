// import { RouterProvider } from 'shared/config/router'
// import { HomePage } from 'pages/home'

// export function App() {
//   return (
//     <RouterProvider
//       routes={[
//         {
//           path: '/',
//           element: <HomePage />,
//         },
//       ]}
//     />
//   )
// }

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from '../pages/Home/ui/HomePage'
// import { HomePage } from 'pages/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}