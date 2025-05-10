// import { createBrowserRouter } from 'react-router-dom'
// import { ReactNode } from 'react'

// interface Route {
//   path: string
//   element: ReactNode
// }

// export function RouterProvider({ routes }: { routes: Route[] }) {
//   const router = createBrowserRouter(routes)
//   return <RouterProvider routes={router} />
// }


// import { createBrowserRouter, RouterProvider as OriginalRouterProvider } from 'react-router-dom'
// import { ReactNode } from 'react'

// interface Route {
//   path: string
//   element: ReactNode
// }

// export function RouterProvider({ routes }: { routes: Route[] }) {
//   const router = createBrowserRouter(routes)
//   return <OriginalRouterProvider router={router} />
// }

import { createBrowserRouter, RouterProvider as OriginalRouterProvider } from 'react-router-dom';
import { ReactNode } from 'react';

interface Route {
  path: string;
  element: ReactNode;
  children?: Route[];
}

interface RouterProviderProps {
  routes: Route[];
}

export function RouterProvider({ routes }: RouterProviderProps) {
  const router = createBrowserRouter(routes);
  return <OriginalRouterProvider router={router} />;
}