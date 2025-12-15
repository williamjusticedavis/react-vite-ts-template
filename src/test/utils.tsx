import { routes } from "@/app/routeConfig";
import {
  createMemoryRouter,
  type RouteObject,
  RouterProvider,
} from "react-router-dom";

function toRouteObjects(): RouteObject[] {
  return routes.map((route) => ({
    path: route.path,
  }));
}

export function renderWithRouter(initialEntries: string[] = ["/"]) {
  const router = createMemoryRouter(toRouteObjects(), {
    initialEntries,
  });

  return <RouterProvider router={router} />;
}
